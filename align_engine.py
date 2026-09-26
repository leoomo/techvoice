import os
import re
import json
import time
import socket
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

socket.setdefaulttimeout(20)

API_KEY = os.environ.get("DASHSCOPE_API_KEY")

CHAPTERS = [
    {"key": "introduction", "name": "Introduction", "vtt": "introduction.vtt", "audio": "introduction.mp3", "title_en": "Introduction", "title_zh": "引言", "num": 0},
    {"key": "chapter1", "name": "Chapter 1", "vtt": "chapter1.vtt", "audio": "chapter1.mp3", "title_en": "Getting Started with AI Agents", "title_zh": "初识 AI Agent", "num": 1},
    {"key": "chapter2", "name": "Chapter 2", "vtt": "chapter2.vtt", "audio": "chapter2.mp3", "title_en": "Context Engineering", "title_zh": "上下文工程", "num": 2},
    {"key": "chapter3", "name": "Chapter 3", "vtt": "chapter3.vtt", "audio": "chapter3.mp3", "title_en": "User Memory and Knowledge Bases", "title_zh": "用户记忆与知识库", "num": 3},
    {"key": "chapter4", "name": "Chapter 4", "vtt": "chapter4.vtt", "audio": "chapter4.mp3", "title_en": "Tools", "title_zh": "工具", "num": 4},
    {"key": "chapter5", "name": "Chapter 5", "vtt": "chapter5.vtt", "audio": "chapter5.mp3", "title_en": "Coding Agents and General-Purpose Agents", "title_zh": "代码智能体与通用智能体", "num": 5},
    {"key": "chapter6", "name": "Chapter 6", "vtt": "chapter6.vtt", "audio": "chapter6.mp3", "title_en": "Interaction: Expanding Observation & Action Spaces", "title_zh": "交互：拓展观察与动作空间", "num": 6},
    {"key": "chapter7", "name": "Chapter 7", "vtt": "chapter7.vtt", "audio": "chapter7.mp3", "title_en": "Evaluating Agents", "title_zh": "Agent 评测", "num": 7},
    {"key": "chapter8", "name": "Chapter 8", "vtt": "chapter8.vtt", "audio": "chapter8.mp3", "title_en": "Model Post-Training", "title_zh": "模型后训练", "num": 8},
    {"key": "chapter9", "name": "Chapter 9", "vtt": "chapter9.vtt", "audio": "chapter9.mp3", "title_en": "Continual Evolution of Agents", "title_zh": "Agent 持续演进", "num": 9},
    {"key": "chapter10", "name": "Chapter 10", "vtt": "chapter10.vtt", "audio": "chapter10.mp3", "title_en": "Multi-Agent Collaboration", "title_zh": "多 Agent 协作", "num": 10},
    {"key": "afterword", "name": "Afterword", "vtt": "afterword.vtt", "audio": "afterword.mp3", "title_en": "Afterword: Co-Evolution of Two Clouds", "title_zh": "后记：两朵云的协同演化", "num": 11}
]

os.makedirs("data/cache", exist_ok=True)

def parse_vtt(vtt_file):
    with open(vtt_file, "r", encoding="utf-8") as f:
        content = f.read()

    cues = []
    matches = re.finditer(r'(\d+)\s*\n(\d{2}:\d{2}:\d{2}[\.,]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[\.,]\d{3})\s*\n(.*?)(?=\n\d+\s*\n|\Z)', content, re.S)
    for m in matches:
        idx = int(m.group(1))
        s = m.group(2).replace(",", ".")
        e = m.group(3).replace(",", ".")
        def to_sec(ts):
            h, mi, sec = ts.split(":")
            return round(int(h)*3600 + int(mi)*60 + float(sec), 3)

        text = m.group(4).strip().replace("\n", " ")
        cues.append({
            "id": idx,
            "start": to_sec(s),
            "end": to_sec(e),
            "en": text
        })
    return cues

def translate_batch(batch, ch_meta, attempt=1):
    url = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions'
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    sample_cues = [{"id": c["id"], "en": c["en"]} for c in batch]
    prompt = f"""You are translating English audio subtitle cues for the book 《深入浅出 AI Agent》(AI Agents in Depth) by Bojie Li.
Current Chapter: {ch_meta['num']} - {ch_meta['title_zh']} ({ch_meta['title_en']}).

TRANSLATION RULES:
1. Translate each cue into fluent, idiomatic, professional Chinese subtitle text matching the spoken audio boundary exactly.
2. Terminology:
   - Always translate "AI Agent" as "AI Agent" or "智能体" (NEVER "AI代理").
   - Keep "Harness" as "Harness".
   - "Context Engineering" -> "上下文工程".
   - "Observation Space" -> "观察空间", "Action Space" -> "动作空间".
   - "Tool Calling" -> "工具调用".
   - "Trajectory" -> "轨迹".
3. Return ONLY a valid JSON array of objects:
[
  {{"id": <integer id matching input>, "zh": "<accurate Chinese translation>"}},
  ...
]
Every cue ID must be preserved exactly.

Cues to translate:
{json.dumps(sample_cues, ensure_ascii=False, indent=2)}
"""
    data = {
        'model': 'qwen-turbo',
        'messages': [
            {'role': 'system', 'content': 'You are a senior technical book translator and editor. Output only the requested JSON array.'},
            {'role': 'user', 'content': prompt}
        ],
        'response_format': {'type': 'json_object'}
    }

    try:
        req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers)
        with urllib.request.urlopen(req, timeout=18) as resp:
            raw_res = resp.read().decode('utf-8')
            res = json.loads(raw_res)
            content = res['choices'][0]['message']['content'].strip()
            content = re.sub(r'^```json\s*', '', content)
            content = re.sub(r'```$', '', content).strip()
            parsed = json.loads(content)
            if isinstance(parsed, dict):
                # find first list value
                for v in parsed.values():
                    if isinstance(v, list):
                        parsed = v
                        break
            
            result_map = {}
            if isinstance(parsed, list):
                for item in parsed:
                    if isinstance(item, dict) and "id" in item and "zh" in item:
                        result_map[int(item["id"])] = item["zh"].strip()
            
            # Check if all cues in batch got translated
            missing = [c["id"] for c in batch if c["id"] not in result_map]
            if missing and attempt < 3:
                # retry missing individually
                sub_batch = [c for c in batch if c["id"] in missing]
                sub_res = translate_batch(sub_batch, ch_meta, attempt + 1)
                result_map.update(sub_res)
                
            return result_map
    except Exception as e:
        if attempt < 3:
            time.sleep(1.0 * attempt)
            # If batch has multiple cues, try splitting into halves to isolate failure
            if len(batch) > 1:
                mid = len(batch) // 2
                res1 = translate_batch(batch[:mid], ch_meta, attempt + 1)
                res2 = translate_batch(batch[mid:], ch_meta, attempt + 1)
                res1.update(res2)
                return res1
            else:
                return translate_batch(batch, ch_meta, attempt + 1)
        print(f"Error translating batch {[c['id'] for c in batch]}: {e}")
        return {}

def process_chapter(ch):
    key = ch["key"]
    vtt_file = ch["vtt"]
    cache_file = f"data/cache/{key}_trans.json"
    
    cues = parse_vtt(vtt_file)
    print(f"\n=======================================================")
    print(f"Processing {ch['name']}: {ch['title_zh']} ({len(cues)} cues)")
    print(f"=======================================================")

    cached = {}
    if os.path.exists(cache_file):
        try:
            with open(cache_file, "r", encoding="utf-8") as f:
                cached = {int(k): v for k, v in json.load(f).items()}
            print(f"Loaded {len(cached)} cached translations for {key}.")
        except Exception as e:
            print(f"Cache load warning: {e}")

    # Determine what needs translating
    to_translate = [c for c in cues if c["id"] not in cached or not cached[c["id"]]]
    print(f"Need to translate {len(to_translate)} / {len(cues)} cues.")

    if to_translate:
        # Batch size 15
        batch_size = 15
        batches = [to_translate[i:i+batch_size] for i in range(0, len(to_translate), batch_size)]
        print(f"Split into {len(batches)} batches. Starting multi-threaded translation...")
        
        t0 = time.time()
        completed_batches = 0
        with ThreadPoolExecutor(max_workers=8) as executor:
            futures = {executor.submit(translate_batch, b, ch): b for b in batches}
            for fut in as_completed(futures):
                res = fut.result()
                cached.update(res)
                completed_batches += 1
                if completed_batches % 5 == 0 or completed_batches == len(batches):
                    print(f"  Progress: {completed_batches}/{len(batches)} batches completed ({time.time()-t0:.1f}s)")
                # Incremental cache save
                with open(cache_file, "w", encoding="utf-8") as f:
                    json.dump(cached, f, ensure_ascii=False, indent=2)

    # Check for any missing cues and do a final single-cue cleanup if needed
    still_missing = [c for c in cues if c["id"] not in cached or not cached[c["id"]]]
    if still_missing:
        print(f"Cleaning up {len(still_missing)} missing cues individually...")
        for c in still_missing:
            res = translate_batch([c], ch)
            cached.update(res)
        with open(cache_file, "w", encoding="utf-8") as f:
            json.dump(cached, f, ensure_ascii=False, indent=2)

    # Build final aligned dataset
    aligned = []
    missing_count = 0
    for c in cues:
        zh = cached.get(c["id"], "").strip()
        if not zh:
            missing_count += 1
            print(f"WARNING: Cue {c['id']} still has no translation: {c['en']}")
        aligned.append({
            "id": c["id"],
            "start": c["start"],
            "end": c["end"],
            "en": c["en"],
            "zh": zh
        })

    # Save data/{key}.js
    out_js = f"data/{key}.js"
    with open(out_js, "w", encoding="utf-8") as f:
        f.write(f"window.CHAPTER_DATA_{key} = {json.dumps(aligned, ensure_ascii=False, indent=2)};\n")
    print(f"Wrote {len(aligned)} cues to {out_js} (missing: {missing_count}).")
    return len(aligned), missing_count

if __name__ == "__main__":
    import sys
    target = sys.argv[1] if len(sys.argv) > 1 else "all"
    if target == "all":
        targets = CHAPTERS
    else:
        targets = [c for c in CHAPTERS if c["key"] == target]
        
    for ch in targets:
        process_chapter(ch)
