import sys
import os
import re
from audio_pipeline import process_chapter, CHAPTER_INFO

REMAINING_CHAPTERS = [
    "chapter3",
    "chapter4",
    "chapter5",
    "chapter6",
    "chapter7",
    "chapter8",
    "chapter9",
    "chapter10",
    "afterword"
]

def update_global_nav():
    # Find all completed chapters
    all_keys = ["introduction", "chapter1", "chapter2", "chapter3", "chapter4", "chapter5", "chapter6", "chapter7", "chapter8", "chapter9", "chapter10", "afterword"]
    completed = []
    for k in all_keys:
        mp3 = f"{k}.mp3"
        html = "listen.html" if k == "introduction" else f"listen_{k}.html"
        if os.path.exists(mp3) and os.path.exists(html):
            completed.append(k)

    for active_key in completed:
        html_file = "listen.html" if active_key == "introduction" else f"listen_{active_key}.html"
        nav_links = []
        for k in completed:
            target_file = "listen.html" if k == "introduction" else f"listen_{k}.html"
            label = CHAPTER_INFO[k]["name"]
            active_cls = "active" if k == active_key else ""
            nav_links.append(f'<a href="{target_file}" class="nav-link {active_cls}">{label}</a>')
        
        nav_html = f"""  <div class="nav-bar">\n    <span class="nav-title">🎧 AI Agents Audio</span>\n    {"\n    ".join(nav_links)}\n  </div>"""

        if os.path.exists(html_file):
            with open(html_file, "r", encoding="utf-8") as f:
                content = f.read()
            content = re.sub(r'<div class="nav-bar">.*?</div>', nav_html, content, flags=re.S)
            with open(html_file, "w", encoding="utf-8") as f:
                f.write(content)

    print(f"Updated global navigation for {len(completed)} completed chapters.")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else None
    targets = [target] if target else REMAINING_CHAPTERS

    for ch in targets:
        print(f"\n=======================================================")
        print(f"  PROCESSING BATCH TARGET: {ch}")
        print(f"=======================================================\n")
        try:
            process_chapter(ch)
            update_global_nav()
        except Exception as e:
            print(f"ERROR processing {ch}: {e}")
            break

    print("\nBatch generation complete!")
