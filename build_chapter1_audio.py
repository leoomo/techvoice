import os
import re
import subprocess
import time
import json

CHUNK_DIR = "audio_chunks/ch1"
os.makedirs(CHUNK_DIR, exist_ok=True)

with open("chapter1_spoken.txt") as f:
    text = f.read()

paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]

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

print(f"Divided Chapter 1 into {len(chunks)} chunks.")

# Chunk 1 was already generated
if os.path.exists("test_chunk_1.mp3") and os.path.exists("test_chunk_1.vtt"):
    os.system(f"cp test_chunk_1.mp3 {CHUNK_DIR}/chunk_0.mp3")
    os.system(f"cp test_chunk_1.vtt {CHUNK_DIR}/chunk_0.vtt")
    print("Chunk 0 restored from test_chunk_1.")

# Generate each chunk
for idx, chunk_text in enumerate(chunks):
    txt_path = f"{CHUNK_DIR}/chunk_{idx}.txt"
    mp3_path = f"{CHUNK_DIR}/chunk_{idx}.mp3"
    vtt_path = f"{CHUNK_DIR}/chunk_{idx}.vtt"

    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(chunk_text)

    if os.path.exists(mp3_path) and os.path.exists(vtt_path) and os.path.getsize(mp3_path) > 100000:
        print(f"Chunk {idx} already exists ({os.path.getsize(mp3_path)} bytes), skipping TTS.")
        continue

    print(f"Generating Chunk {idx} ({len(chunk_text.split())} words)...")
    cmd = [
        "/Users/zen/.local/bin/uvx", "edge-tts",
        "-f", txt_path,
        "-v", "en-US-ChristopherNeural",
        "--write-media", mp3_path,
        "--write-subtitles", vtt_path
    ]

    success = False
    for attempt in range(3):
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0 and os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 100000:
            print(f"Chunk {idx} successfully generated!")
            success = True
            break
        print(f"Chunk {idx} attempt {attempt+1} failed, retrying in 3 seconds... Err: {res.stderr[:200]}")
        time.sleep(3)

    if not success:
        raise RuntimeError(f"Failed to generate chunk {idx} after 3 attempts.")

print("All chunks synthesized successfully! Now concatenating and aligning subtitles...")

# Measure duration of each chunk using ffprobe
def get_duration(file_path):
    cmd = [
        "ffprobe", "-v", "error", "-show_entries",
        "format=duration", "-of", "default=noprint_wrappers=1:nokey=1",
        file_path
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    return float(res.stdout.strip())

durations = []
for idx in range(len(chunks)):
    mp3_path = f"{CHUNK_DIR}/chunk_{idx}.mp3"
    d = get_duration(mp3_path)
    durations.append(d)
    print(f"Chunk {idx} duration: {d:.2f} seconds ({d/60:.2f} mins)")

total_duration = sum(durations)
print(f"Total Chapter 1 audio duration: {total_duration:.2f} seconds ({total_duration/60:.2f} mins)")

# Concat MP3s
concat_list_path = f"{CHUNK_DIR}/concat_list.txt"
with open(concat_list_path, "w") as f:
    for idx in range(len(chunks)):
        f.write(f"file 'chunk_{idx}.mp3'\n")

cmd_concat = [
    "ffmpeg", "-y", "-f", "concat", "-safe", "0",
    "-i", concat_list_path, "-c", "copy", "chapter1.mp3"
]
subprocess.run(cmd_concat, check=True)
print(f"Concatenated chapter1.mp3 generated ({os.path.getsize('chapter1.mp3')} bytes).")

# Parse and align subtitles
def parse_time(ts_str):
    # Format: HH:MM:SS,mmm or HH:MM:SS.mmm
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

all_cues = []
cue_counter = 1
cum_offset = 0.0

for idx in range(len(chunks)):
    vtt_path = f"{CHUNK_DIR}/chunk_{idx}.vtt"
    with open(vtt_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern matches cue index, timestamp, and text
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

print(f"Aligned {len(all_cues)} subtitle cues across all 6 chunks.")

# Write chapter1.srt
with open("chapter1.srt", "w", encoding="utf-8") as f:
    for c in all_cues:
        f.write(f"{c['id']}\n")
        f.write(f"{format_time_srt(c['start'])} --> {format_time_srt(c['end'])}\n")
        f.write(f"{c['text']}\n\n")

# Write chapter1.vtt
with open("chapter1.vtt", "w", encoding="utf-8") as f:
    f.write("WEBVTT\n\n")
    for c in all_cues:
        f.write(f"{c['id']}\n")
        f.write(f"{format_time_vtt(c['start'])} --> {format_time_vtt(c['end'])}\n")
        f.write(f"{c['text']}\n\n")

print("Created chapter1.srt and chapter1.vtt.")

# Generate listen_ch1.html
cues_json = json.dumps(all_cues, ensure_ascii=False)

html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Agents in Depth - Chapter 1 (Audio Listening Practice)</title>
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
      background: rgba(15, 23, 42, 0.85);
      border-bottom: 1px solid var(--border);
      padding: 10px 24px;
      display: flex;
      gap: 12px;
      align-items: center;
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 200;
    }}
    .nav-title {{
      font-weight: 700;
      font-size: 14px;
      color: var(--accent);
      margin-right: 12px;
    }}
    .nav-link {{
      color: var(--text-muted);
      text-decoration: none;
      font-size: 13px;
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid transparent;
      transition: all 0.15s ease;
    }}
    .nav-link:hover {{
      color: var(--text-main);
      border-color: var(--border);
    }}
    .nav-link.active {{
      background: var(--accent);
      color: #fff;
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
    <span class="nav-title">🎧 AI Agents Audio Course</span>
    <a href="listen.html" class="nav-link">Introduction</a>
    <a href="listen_ch1.html" class="nav-link active">Chapter 1</a>
  </div>

  <div class="container">
    <header>
      <h1>Chapter 1: Getting Started with AI Agents</h1>
      <div class="subtitle">AI Agents in Depth • Spoken Audio & Interactive Transcripts • Voice: en-US-ChristopherNeural</div>
      <div class="tip">💡 <b>How to practice:</b> Click any sentence to jump the audio directly. Use Space to play/pause. Press Left/Right arrows to skip 5 seconds.</div>
    </header>

    <div class="sticky-player">
      <div class="player-row">
        <audio id="audio" controls preload="metadata">
          <source src="chapter1.mp3" type="audio/mpeg">
          <track default kind="subtitles" src="chapter1.vtt" srclang="en" label="English">
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

with open("listen_ch1.html", "w", encoding="utf-8") as f:
    f.write(html_template)

print("Created listen_ch1.html successfully!")
