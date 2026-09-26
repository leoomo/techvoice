import os
import re
import json
import subprocess

CHAPTERS = [
    {
        "key": "introduction",
        "num": 0,
        "name": "Introduction",
        "title_en": "Introduction",
        "title_zh": "引言",
        "vtt": "introduction.vtt",
        "en_md": "repo/book-en/introduction.md",
        "zh_md": "repo/book/introduction.md",
        "audio": "introduction.mp3"
    },
    {
        "key": "chapter1",
        "num": 1,
        "name": "Chapter 1",
        "title_en": "Getting Started with AI Agents",
        "title_zh": "初识 AI Agent",
        "vtt": "chapter1.vtt",
        "en_md": "repo/book-en/chapter1.md",
        "zh_md": "repo/book/chapter1.md",
        "audio": "chapter1.mp3"
    },
    {
        "key": "chapter2",
        "num": 2,
        "name": "Chapter 2",
        "title_en": "Context Engineering",
        "title_zh": "上下文工程",
        "vtt": "chapter2.vtt",
        "en_md": "repo/book-en/chapter2.md",
        "zh_md": "repo/book/chapter2.md",
        "audio": "chapter2.mp3"
    },
    {
        "key": "chapter3",
        "num": 3,
        "name": "Chapter 3",
        "title_en": "User Memory and Knowledge Bases",
        "title_zh": "用户记忆与知识库",
        "vtt": "chapter3.vtt",
        "en_md": "repo/book-en/chapter3.md",
        "zh_md": "repo/book/chapter3.md",
        "audio": "chapter3.mp3"
    },
    {
        "key": "chapter4",
        "num": 4,
        "name": "Chapter 4",
        "title_en": "Tools",
        "title_zh": "工具",
        "vtt": "chapter4.vtt",
        "en_md": "repo/book-en/chapter4.md",
        "zh_md": "repo/book/chapter4.md",
        "audio": "chapter4.mp3"
    },
    {
        "key": "chapter5",
        "num": 5,
        "name": "Chapter 5",
        "title_en": "Coding Agents and General-Purpose Agents",
        "title_zh": "代码智能体与通用智能体",
        "vtt": "chapter5.vtt",
        "en_md": "repo/book-en/chapter5.md",
        "zh_md": "repo/book/chapter5.md",
        "audio": "chapter5.mp3"
    },
    {
        "key": "chapter6",
        "num": 6,
        "name": "Chapter 6",
        "title_en": "Interaction: Expanding Observation & Action Spaces",
        "title_zh": "交互：拓展观察与动作空间",
        "vtt": "chapter6.vtt",
        "en_md": "repo/book-en/chapter6.md",
        "zh_md": "repo/book/chapter6.md",
        "audio": "chapter6.mp3"
    },
    {
        "key": "chapter7",
        "num": 7,
        "name": "Chapter 7",
        "title_en": "Evaluating Agents",
        "title_zh": "Agent 评测",
        "vtt": "chapter7.vtt",
        "en_md": "repo/book-en/chapter7.md",
        "zh_md": "repo/book/chapter7.md",
        "audio": "chapter7.mp3"
    },
    {
        "key": "chapter8",
        "num": 8,
        "name": "Chapter 8",
        "title_en": "Model Post-Training",
        "title_zh": "模型后训练",
        "vtt": "chapter8.vtt",
        "en_md": "repo/book-en/chapter8.md",
        "zh_md": "repo/book/chapter8.md",
        "audio": "chapter8.mp3"
    },
    {
        "key": "chapter9",
        "num": 9,
        "name": "Chapter 9",
        "title_en": "Continual Evolution of Agents",
        "title_zh": "Agent 持续演进",
        "vtt": "chapter9.vtt",
        "en_md": "repo/book-en/chapter9.md",
        "zh_md": "repo/book/chapter9.md",
        "audio": "chapter9.mp3"
    },
    {
        "key": "chapter10",
        "num": 10,
        "name": "Chapter 10",
        "title_en": "Multi-Agent Collaboration",
        "title_zh": "多 Agent 协作",
        "vtt": "chapter10.vtt",
        "en_md": "repo/book-en/chapter10.md",
        "zh_md": "repo/book/chapter10.md",
        "audio": "chapter10.mp3"
    },
    {
        "key": "afterword",
        "num": 11,
        "name": "Afterword",
        "title_en": "Afterword: Co-Evolution of Two Clouds",
        "title_zh": "后记：两朵云的协同演化",
        "vtt": "afterword.vtt",
        "en_md": "repo/book-en/afterword.md",
        "zh_md": "repo/book/afterword.md",
        "audio": "afterword.mp3"
    }
]

os.makedirs("data", exist_ok=True)

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

def extract_zh_sentences(zh_file):
    with open(zh_file, "r", encoding="utf-8") as f:
        zh_raw = f.read()

    # Clean markdown formatting in Chinese
    zh_text = re.sub(r'\{#[^}]+\}', '', zh_raw)
    zh_text = re.sub(r'\{\.unnumbered\}', '', zh_text)
    zh_text = re.sub(r'\[\^[^\]]+\]:\s*.*?(?=\n\n|\Z)', '', zh_text, flags=re.S)
    zh_text = re.sub(r'\[\^[^\]]+\]', '', zh_text)
    zh_text = re.sub(r'!\[([^\]]*)\]\([^)]+\)', r'如图所示：\1', zh_text)
    zh_text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', zh_text)
    zh_text = re.sub(r'\*\*([^*]+)\*\*', r'\1', zh_text)
    zh_text = re.sub(r'\*([^*]+)\*', r'\1', zh_text)
    zh_text = re.sub(r'```(?:\w+)?\n.*?```', '', zh_text, flags=re.S)
    zh_text = re.sub(r'`([^`]+)`', r'\1', zh_text)

    zh_paras = [p.strip() for p in zh_text.split('\n\n') if p.strip()]

    zh_sentences = []
    for p in zh_paras:
        m_head = re.match(r'^(#+)\s*(.*)', p)
        if m_head:
            title = m_head.group(2).strip()
            zh_sentences.append(title)
            continue

        lines = [l.strip() for l in p.splitlines() if l.strip()]
        for line in lines:
            line = re.sub(r'^[-*+]\s+', '', line)
            line = re.sub(r'^\d+\.\s+', '', line)
            s_list = re.split(r'([。！？；]+["”]?|\n)', line)
            cur = ""
            for part in s_list:
                cur += part
                if re.search(r'[。！？；]+["”]?$', cur) or len(cur) > 65:
                    s = cur.strip()
                    if s:
                        zh_sentences.append(s)
                    cur = ""
            if cur.strip():
                zh_sentences.append(cur.strip())

    return zh_sentences

chapters_meta = []

for ch in CHAPTERS:
    key = ch["key"]
    print(f"Processing bilingual alignment for {key}...")
    cues = parse_vtt(ch["vtt"])
    zh_sentences = extract_zh_sentences(ch["zh_md"])

    n_cues = len(cues)
    n_zh = len(zh_sentences)

    aligned = []
    for i, cue in enumerate(cues):
        start_ratio = i / n_cues
        end_ratio = (i + 1) / n_cues
        zh_start_idx = int(start_ratio * n_zh)
        zh_end_idx = max(zh_start_idx + 1, int(end_ratio * n_zh))
        zh_chunk = " ".join(zh_sentences[zh_start_idx:zh_end_idx])
        if not zh_chunk and zh_start_idx < n_zh:
            zh_chunk = zh_sentences[zh_start_idx]

        aligned.append({
            "id": cue["id"],
            "start": cue["start"],
            "end": cue["end"],
            "en": cue["en"],
            "zh": zh_chunk
        })

    # Save to data/chapter_{key}.js
    js_content = f"window.CHAPTER_DATA_{key} = {json.dumps(aligned, ensure_ascii=False, indent=2)};\n"
    with open(f"data/{key}.js", "w", encoding="utf-8") as f:
        f.write(js_content)

    # Get audio duration
    res = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", ch["audio"]], capture_output=True, text=True)
    dur = float(res.stdout.strip())
    m = int(dur // 60)
    s = int(dur % 60)
    dur_str = f"{m}:{s:02d}"

    chapters_meta.append({
        "key": key,
        "num": ch["num"],
        "name": ch["name"],
        "title_en": ch["title_en"],
        "title_zh": ch["title_zh"],
        "audio": ch["audio"],
        "duration_sec": round(dur, 2),
        "duration_str": dur_str,
        "cues_count": len(aligned),
        "js_file": f"data/{key}.js"
    })

meta_js_content = f"window.CHAPTERS_META = {json.dumps(chapters_meta, ensure_ascii=False, indent=2)};\n"
with open("data/chapters_meta.js", "w", encoding="utf-8") as f:
    f.write(meta_js_content)

print("\nSuccessfully built all 12 bilingual data files and chapters_meta.js!")
