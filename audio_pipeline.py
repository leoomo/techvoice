import os
import re
import subprocess
import time
import json
import sys

CHAPTER_INFO = {
    "introduction": {"title": "Introduction", "file": "repo/book-en/introduction.md", "num": 0, "name": "Introduction"},
    "chapter1": {"title": "Getting Started with AI Agents", "file": "repo/book-en/chapter1.md", "num": 1, "name": "Chapter 1"},
    "chapter2": {"title": "Context Engineering", "file": "repo/book-en/chapter2.md", "num": 2, "name": "Chapter 2"},
    "chapter3": {"title": "User Memory and Knowledge Bases", "file": "repo/book-en/chapter3.md", "num": 3, "name": "Chapter 3"},
    "chapter4": {"title": "Tools", "file": "repo/book-en/chapter4.md", "num": 4, "name": "Chapter 4"},
    "chapter5": {"title": "Coding Agents and General-Purpose Agents", "file": "repo/book-en/chapter5.md", "num": 5, "name": "Chapter 5"},
    "chapter6": {"title": "Interaction: Expanding the Observation and Action Spaces", "file": "repo/book-en/chapter6.md", "num": 6, "name": "Chapter 6"},
    "chapter7": {"title": "Evaluating Agents", "file": "repo/book-en/chapter7.md", "num": 7, "name": "Chapter 7"},
    "chapter8": {"title": "Model Post-Training", "file": "repo/book-en/chapter8.md", "num": 8, "name": "Chapter 8"},
    "chapter9": {"title": "Continual Evolution of Agents", "file": "repo/book-en/chapter9.md", "num": 9, "name": "Chapter 9"},
    "chapter10": {"title": "Multi-Agent Collaboration", "file": "repo/book-en/chapter10.md", "num": 10, "name": "Chapter 10"},
    "afterword": {"title": "Afterword: Co-Evolution of Two Clouds", "file": "repo/book-en/afterword.md", "num": 11, "name": "Afterword"}
}

def clean_for_speech(raw_text, ch_key):
    info = CHAPTER_INFO[ch_key]
    ch_num = info["num"]
    title = info["title"]

    text = raw_text

    # 1. Frontmatter / unnumbered tags
    text = re.sub(r'\{#[^}]+\}', '', text)
    text = re.sub(r'\{\.unnumbered\}', '', text)

    # 2. Footnotes: [^ch1-xxx] and footnote definitions [^ch1-xxx]: ...
    text = re.sub(r'\[\^[^\]]+\]:\s*.*?(?=\n\n|\Z)', '', text, flags=re.S)
    text = re.sub(r'\[\^[^\]]+\]', '', text)

    # 3. Handle images: ![caption](path) -> As illustrated in caption.
    def clean_img(m):
        cap = m.group(1).strip()
        if cap:
            return f"As illustrated in {cap}."
        return ""
    text = re.sub(r'!\[([^\]]*)\]\([^)]+\)', clean_img, text)

    # 4. Handle links: [text](url) -> text
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)

    # 5. Handle blockquotes: > [!NOTE] or >
    text = re.sub(r'>\s*\[!(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*', '', text)
    text = re.sub(r'^>\s*', '', text, flags=re.M)

    # 6. Specific math transformations
    text = text.replace(r'$o_t \in \mathcal{O}$', 'observation o sub t in observation space O')
    text = text.replace(r'$a_t \in \mathcal{A}$', 'action a sub t in action space A')
    text = text.replace(r'$\pi(a_t \mid c_t)$', 'policy pi of action a sub t given context c sub t')
    text = text.replace(r'$c_t=(o_1,a_1,\ldots,o_{t-1},a_{t-1},o_t)$', 'context c sub t representing the history of observations and actions up to time t')
    text = text.replace(r'$O(N^2)$', 'O of N squared')
    text = text.replace(r'$O(N)$', 'O of N')
    text = text.replace(r'$O(1)$', 'O of 1')
    text = text.replace(r'$\rho_t$', 'rho sub t')
    text = text.replace(r'$k$', 'k')
    text = text.replace(r'$N$', 'N')
    text = text.replace(r'$t$', 't')

    # Remove remaining math dollar signs cleanly
    text = re.sub(r'\$\$([^$]+)\$\$', r'\1', text)
    text = re.sub(r'\$([^$\n]+)\$', r'\1', text)

    # 7. Code blocks: replace with concise spoken descriptions
    def clean_code_block(m):
        content = m.group(1).strip()
        first_line = content.splitlines()[0] if content else ""
        if "{" in content and ("model" in content or "choices" in content or "role" in content):
            return "Here is the structured JSON representation exchanged with the API, defining the model parameters, conversation history, and tool definitions."
        if "```bash" in m.group(0):
            return "Refer to the companion repository for the shell command sequence."
        if "trajectory" in content:
            return "Here is the trajectory representation tracking the sequence of user prompts, model decisions, and environment observations across execution steps."
        lines = content.splitlines()
        if len(lines) <= 2:
            return f"Code statement: {content}."
        return "Refer to the companion repository for the complete code implementation."

    text = re.sub(r'```(?:\w+)?\n(.*?)```', clean_code_block, text, flags=re.S)

    # 8. Tables: Convert markdown tables into spoken explanations
    def clean_table(m):
        table_text = m.group(0)
        rows = [r.strip() for r in table_text.strip().splitlines() if r.strip()]
        if len(rows) < 3:
            return ""
        headers = [c.strip() for c in rows[0].strip('|').split('|')]
        data_rows = rows[2:]
        spoken_rows = []
        for dr in data_rows:
            cols = [c.strip() for c in dr.strip('|').split('|')]
            if len(cols) == len(headers):
                items = [f"{h}: {c}" for h, c in zip(headers, cols) if c and h and not c.startswith("---")]
                if items:
                    spoken_rows.append("; ".join(items) + ".")
        return "\n\n" + "\n".join(spoken_rows) + "\n\n"

    text = re.sub(r'(\|.*?\|\n\|[-:| ]+\|\n(?:\|.*?\|\n)+)', clean_table, text)

    # 9. Clean Headings
    if ch_num > 0 and ch_num <= 10:
        text = re.sub(r'^#\s+(.*)', f'Chapter {ch_num}: \\1.\n', text, flags=re.M)
    else:
        text = re.sub(r'^#\s+(.*)', f'\\1.\n', text, flags=re.M)

    text = re.sub(r'^##+\s+(.*)', r'\n\n\1.\n\n', text, flags=re.M)

    # 10. Clean star difficulty ratings
    text = text.replace('★★★', 'advanced difficulty, three stars: ')
    text = text.replace('★★', 'intermediate difficulty, two stars: ')
    text = text.replace('★', 'introductory difficulty, one star: ')

    # 11. Clean experiment and thought question headings
    text = re.sub(r'\*\*Experiment\s+(\d+-\d+)\s*\(([^)]+)\):\s*([^*]+)\*\*', r'Experiment \1, \2: \3.', text)
    text = re.sub(r'\*\*Thought Question\s+(\d+-\d+):\s*([^*]+)\*\*', r'Thought Question \1: \2.', text)

    # 12. Clean bold and italics
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    text = re.sub(r'\*([^*]+)\*', r'\1', text)

    # 13. Clean inline code backticks: `code` -> code
    text = re.sub(r'`([^`]+)`', r'\1', text)

    # 14. Clean bullet points & numbered lists
    text = re.sub(r'^[ \t]*[-*+]\s+', '', text, flags=re.M)
    text = re.sub(r'^[ \t]*\d+\.\s+', '', text, flags=re.M)

    # 15. Clean currency symbols: \$100 -> 100 dollars, $100 -> 100 dollars
    text = re.sub(r'\\?\$(\d+(?:\.\d+)?)\s*(?:M|million)', r'\1 million dollars', text)
    text = re.sub(r'\\?\$(\d+(?:\.\d+)?)\s*(?:B|billion)', r'\1 billion dollars', text)
    text = re.sub(r'\\?\$(\d+(?:\.\d+)?)', r'\1 dollars', text)

    # 16. Normalize whitespace
    paragraphs = [p.strip() for p in text.split('\n\n') if p.strip()]
    cleaned_text = '\n\n'.join(paragraphs)
    return cleaned_text

def get_duration(file_path):
    cmd = [
        "ffprobe", "-v", "error", "-show_entries",
        "format=duration", "-of", "default=noprint_wrappers=1:nokey=1",
        file_path
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    return float(res.stdout.strip())

def parse_time(ts_str):
    ts_str = ts_str.replace(",", ".")
    parts = ts_str.split(":")
    h = int(parts[0])
    m = int(parts[1])
    s = float(parts[2])
    return h * 3600 + m * 60 + s

def format_time_vtt(sec):
    h = int(sec // 3600)
    m = int((sec % 3600) // 60)
    s = sec % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}"

def format_time_srt(sec):
    return format_time_vtt(sec).replace(".", ",")

def process_chapter(ch_key):
    info = CHAPTER_INFO[ch_key]
    print(f"\n==================================================")
    print(f"Starting processing: {info['name']} - {info['title']}")
    print(f"==================================================")

    with open(info["file"], "r", encoding="utf-8") as f:
        raw_text = f.read()

    spoken_text = clean_for_speech(raw_text, ch_key)
    spoken_file = f"{ch_key}_spoken.txt"
    with open(spoken_file, "w", encoding="utf-8") as f:
        f.write(spoken_text)

    word_count = len(spoken_text.split())
    print(f"Generated {spoken_file} ({word_count} words).")

    # Chunking paragraphs ~2200 words
    paragraphs = [p.strip() for p in spoken_text.split("\n\n") if p.strip()]
    chunks = []
    cur_chunk = []
    cur_words = 0

    for p in paragraphs:
        p_words = len(p.split())
        if cur_words + p_words > 2200 and cur_chunk:
            chunks.append("\n\n".join(cur_chunk))
            cur_chunk = [p]
            cur_words = p_words
        else:
            cur_chunk.append(p)
            cur_words += p_words

    if cur_chunk:
        chunks.append("\n\n".join(cur_chunk))

    print(f"Divided into {len(chunks)} chunks.")

    chunk_dir = f"audio_chunks/{ch_key}"
    os.makedirs(chunk_dir, exist_ok=True)

    # Synthesize chunks with edge-tts
    for idx, chunk_text in enumerate(chunks):
        txt_path = f"{chunk_dir}/chunk_{idx}.txt"
        mp3_path = f"{chunk_dir}/chunk_{idx}.mp3"
        vtt_path = f"{chunk_dir}/chunk_{idx}.vtt"

        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(chunk_text)

        if os.path.exists(mp3_path) and os.path.exists(vtt_path) and os.path.getsize(mp3_path) > 100000:
            print(f"Chunk {idx+1}/{len(chunks)} already cached ({os.path.getsize(mp3_path)} bytes), skipping.")
            continue

        print(f"Synthesizing Chunk {idx+1}/{len(chunks)} ({len(chunk_text.split())} words)...")
        cmd = [
            "/Users/zen/.local/bin/uvx", "edge-tts",
            "-f", txt_path,
            "-v", "en-US-ChristopherNeural",
            "--write-media", mp3_path,
            "--write-subtitles", vtt_path
        ]

        success = False
        for attempt in range(4):
            res = subprocess.run(cmd, capture_output=True, text=True)
            if res.returncode == 0 and os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 100000:
                print(f"  Chunk {idx+1}/{len(chunks)} finished successfully!")
                success = True
                break
            print(f"  Chunk {idx+1} attempt {attempt+1} failed, retrying in 3s... (Err: {res.stderr[:160]})")
            time.sleep(3)

        if not success:
            raise RuntimeError(f"Failed to generate chunk {idx} after 4 attempts.")

    # Measure durations
    durations = []
    for idx in range(len(chunks)):
        mp3_path = f"{chunk_dir}/chunk_{idx}.mp3"
        d = get_duration(mp3_path)
        durations.append(d)
        print(f"  Chunk {idx+1} duration: {d:.2f}s ({d/60:.2f} mins)")

    total_d = sum(durations)
    print(f"Total duration: {total_d:.2f} seconds ({total_d/60:.2f} mins)")

    # Concatenate MP3
    final_mp3 = f"{ch_key}.mp3"
    concat_list = f"{chunk_dir}/concat_list.txt"
    with open(concat_list, "w") as f:
        for idx in range(len(chunks)):
            f.write(f"file 'chunk_{idx}.mp3'\n")

    cmd_concat = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", concat_list, "-c", "copy", final_mp3
    ]
    subprocess.run(cmd_concat, capture_output=True, check=True)
    print(f"Generated {final_mp3} ({os.path.getsize(final_mp3)} bytes).")

    # Align cues
    all_cues = []
    cue_counter = 1
    cum_offset = 0.0

    for idx in range(len(chunks)):
        vtt_path = f"{chunk_dir}/chunk_{idx}.vtt"
        with open(vtt_path, "r", encoding="utf-8") as f:
            content = f.read()

        raw_cues = re.findall(r'(\d+)\s*\n(\d{2}:\d{2}:\d{2}[,\.]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[,\.]\d{3})\s*\n(.*?)(?=\n\d+\s*\n|\Z)', content, re.S)
        for rc in raw_cues:
            start_sec = parse_time(rc[1]) + cum_offset
            end_sec = parse_time(rc[2]) + cum_offset
            cue_text = rc[3].strip().replace("\n", " ")
            all_cues.append({
                "id": cue_counter,
                "start": round(start_sec, 3),
                "end": round(end_sec, 3),
                "text": cue_text
            })
            cue_counter += 1

        cum_offset += durations[idx]

    # Write SRT
    srt_file = f"{ch_key}.srt"
    with open(srt_file, "w", encoding="utf-8") as f:
        for c in all_cues:
            f.write(f"{c['id']}\n")
            f.write(f"{format_time_srt(c['start'])} --> {format_time_srt(c['end'])}\n")
            f.write(f"{c['text']}\n\n")

    # Write VTT
    vtt_file = f"{ch_key}.vtt"
    with open(vtt_file, "w", encoding="utf-8") as f:
        f.write("WEBVTT\n\n")
        for c in all_cues:
            f.write(f"{c['id']}\n")
            f.write(f"{format_time_vtt(c['start'])} --> {format_time_vtt(c['end'])}\n")
            f.write(f"{c['text']}\n\n")

    # Generate HTML player
    player_file = f"listen_{ch_key}.html" if ch_key != "introduction" else "listen.html"
    generate_player_html(ch_key, all_cues, player_file)
    print(f"Successfully finished {ch_key}! Player saved to {player_file}.\n")

def generate_player_html(active_key, cues, output_file):
    info = CHAPTER_INFO[active_key]
    cues_json = json.dumps(cues, ensure_ascii=False)

    nav_links = []
    # All chapters for navigation
    for k in ["introduction", "chapter1", "chapter2", "chapter3", "chapter4", "chapter5", "chapter6", "chapter7", "chapter8", "chapter9", "chapter10", "afterword"]:
        target_file = "listen.html" if k == "introduction" else f"listen_{k}.html"
        label = CHAPTER_INFO[k]["name"]
        active_cls = "active" if k == active_key else ""
        nav_links.append(f'<a href="{target_file}" class="nav-link {active_cls}">{label}</a>')

    nav_html = "\n    ".join(nav_links)
    mp3_file = f"{active_key}.mp3"
    vtt_file = f"{active_key}.vtt"

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Agents in Depth - {info['name']}: {info['title']}</title>
  <style>
    :root {{
      --bg: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #38bdf8;
      --accent-bg: rgba(56, 189, 248, 0.12);
      --highlight: #0284c7;
      --border: #334155;
    }}
    @media (prefers-color-scheme: light) {{
      :root {{
        --bg: #f8fafc;
        --card-bg: #ffffff;
        --text-main: #0f172a;
        --text-muted: #64748b;
        --accent: #0284c7;
        --accent-bg: rgba(2, 132, 199, 0.08);
        --highlight: #0369a1;
        --border: #e2e8f0;
      }}
    }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text-main);
      margin: 0;
      padding: 0;
      line-height: 1.7;
    }}
    .nav-bar {{
      background: rgba(15, 23, 42, 0.9);
      border-bottom: 1px solid var(--border);
      padding: 10px 24px;
      display: flex;
      gap: 8px;
      align-items: center;
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 200;
      overflow-x: auto;
      white-space: nowrap;
    }}
    .nav-title {{
      font-weight: 700;
      font-size: 14px;
      color: var(--accent);
      margin-right: 10px;
      flex-shrink: 0;
    }}
    .nav-link {{
      color: var(--text-muted);
      text-decoration: none;
      font-size: 12px;
      padding: 4px 9px;
      border-radius: 6px;
      border: 1px solid transparent;
      transition: all 0.15s ease;
      flex-shrink: 0;
    }}
    .nav-link:hover {{
      color: var(--text-main);
      border-color: var(--border);
    }}
    .nav-link.active {{
      background: var(--accent);
      color: #fff;
      font-weight: 600;
    }}
    .container {{
      max-width: 860px;
      margin: 0 auto;
      padding: 24px 24px 120px 24px;
    }}
    header {{
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 20px;
    }}
    h1 {{
      font-size: 26px;
      font-weight: 700;
      margin: 0 0 8px 0;
      letter-spacing: -0.02em;
    }}
    .subtitle {{
      color: var(--text-muted);
      font-size: 15px;
    }}
    .sticky-player {{
      position: sticky;
      top: 56px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px 20px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
      z-index: 100;
      margin-bottom: 32px;
      backdrop-filter: blur(12px);
    }}
    .player-row {{
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }}
    audio {{
      flex: 1;
      min-width: 260px;
      height: 40px;
    }}
    .controls {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}
    .btn {{
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
    }}
    .btn:hover {{
      background: var(--accent-bg);
      border-color: var(--accent);
      color: var(--accent);
    }}
    .btn.active {{
      background: var(--accent);
      color: #ffffff;
      border-color: var(--accent);
    }}
    .transcript {{
      display: flex;
      flex-direction: column;
      gap: 12px;
    }}
    .cue-item {{
      padding: 12px 16px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 3px solid transparent;
      display: flex;
      gap: 14px;
      align-items: baseline;
    }}
    .cue-item:hover {{
      background: var(--accent-bg);
    }}
    .cue-item.active {{
      background: var(--accent-bg);
      border-left: 3px solid var(--accent);
      color: var(--text-main);
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }}
    .cue-time {{
      font-size: 12px;
      color: var(--text-muted);
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      flex-shrink: 0;
      min-width: 50px;
    }}
    .cue-text {{
      flex: 1;
      font-size: 16px;
    }}
    .cue-item.active .cue-time {{
      color: var(--accent);
      font-weight: 600;
    }}
    .tip {{
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 8px;
    }}
  </style>
</head>
<body>
  <div class="nav-bar">
    <span class="nav-title">🎧 AI Agents Audio</span>
    {nav_html}
  </div>

  <div class="container">
    <header>
      <h1>{info['name']}: {info['title']}</h1>
      <div class="subtitle">AI Agents in Depth • Spoken Audio & Interactive Transcripts • Voice: en-US-ChristopherNeural</div>
      <div class="tip">💡 <b>How to practice:</b> Click any sentence to jump the audio directly. Use Space to play/pause. Press Left/Right arrows to skip 5 seconds.</div>
    </header>

    <div class="sticky-player">
      <div class="player-row">
        <audio id="audio" controls preload="metadata">
          <source src="{mp3_file}" type="audio/mpeg">
          <track default kind="subtitles" src="{vtt_file}" srclang="en" label="English">
          Your browser does not support the audio element.
        </audio>
        <div class="controls">
          <button class="btn" id="btn-rewind" title="Rewind 5s">⏪ 5s</button>
          <button class="btn" id="btn-forward" title="Forward 5s">5s ⏩</button>
          <button class="btn speed-btn" data-speed="0.8">0.8x</button>
          <button class="btn speed-btn active" data-speed="1.0">1.0x</button>
          <button class="btn speed-btn" data-speed="1.2">1.2x</button>
          <button class="btn speed-btn" data-speed="1.5">1.5x</button>
          <button class="btn active" id="btn-autoscroll">Auto-Scroll: ON</button>
        </div>
      </div>
    </div>

    <div class="transcript" id="transcript">
      <!-- Cues rendered by JavaScript -->
    </div>
  </div>

  <script>
    const cues = {cues_json};
    const audio = document.getElementById("audio");
    const transcriptEl = document.getElementById("transcript");
    let autoScroll = true;
    let activeCueId = null;

    // Render cues
    cues.forEach(cue => {{
      const div = document.createElement("div");
      div.className = "cue-item";
      div.id = `cue-${{cue.id}}`;
      
      const m = Math.floor(cue.start / 60);
      const s = Math.floor(cue.start % 60);
      const timeStr = `${{m}}:${{s < 10 ? "0" : ""}}${{s}}`;
      
      div.innerHTML = `
        <span class="cue-time">${{timeStr}}</span>
        <span class="cue-text">${{cue.text}}</span>
      `;
      div.addEventListener("click", () => {{
        audio.currentTime = cue.start + 0.05;
        audio.play();
      }});
      transcriptEl.appendChild(div);
    }});

    // Time update sync
    audio.addEventListener("timeupdate", () => {{
      const cur = audio.currentTime;
      const currentCue = cues.find(c => cur >= c.start && cur <= c.end) || 
                         cues.find(c => cur >= c.start && cur <= c.start + 15);
      
      if (currentCue && currentCue.id !== activeCueId) {{
        if (activeCueId) {{
          const prev = document.getElementById(`cue-${{activeCueId}}`);
          if (prev) prev.classList.remove("active");
        }}
        activeCueId = currentCue.id;
        const curEl = document.getElementById(`cue-${{activeCueId}}`);
        if (curEl) {{
          curEl.classList.add("active");
          if (autoScroll) {{
            curEl.scrollIntoView({{ behavior: "smooth", block: "center" }});
          }}
        }}
      }}
    }});

    // Speed controls
    document.querySelectorAll(".speed-btn").forEach(btn => {{
      btn.addEventListener("click", (e) => {{
        document.querySelectorAll(".speed-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        audio.playbackRate = parseFloat(btn.dataset.speed);
      }});
    }});

    // Rewind / Forward
    document.getElementById("btn-rewind").addEventListener("click", () => {{
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    }});
    document.getElementById("btn-forward").addEventListener("click", () => {{
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    }});

    // Auto-Scroll Toggle
    const autoScrollBtn = document.getElementById("btn-autoscroll");
    autoScrollBtn.addEventListener("click", () => {{
      autoScroll = !autoScroll;
      autoScrollBtn.textContent = `Auto-Scroll: ${{autoScroll ? "ON" : "OFF"}}`;
      autoScrollBtn.classList.toggle("active", autoScroll);
    }});

    // Spacebar to Play/Pause
    window.addEventListener("keydown", (e) => {{
      if (e.code === "Space" && e.target === document.body) {{
        e.preventDefault();
        if (audio.paused) audio.play();
        else audio.pause();
      }}
    }});
  </script>
</body>
</html>
"""

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(html)

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "chapter2"
    process_chapter(target)
