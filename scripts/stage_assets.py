"""Copy and downsize Purview media from C:\\output and the vault into the site folder.

Re-run after regenerating the NotebookLM suite. Skips files that already exist unless --force.
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image

SITE = Path(__file__).resolve().parent.parent
OUT = Path(r"C:\output\obsidian\notebooklm\tdd-microsoft-purview")
NBLM = OUT / "NEXUS _ tdd-microsoft-purview _ 2026-09-26 _ tech-deep-dive"
PACK = Path(r"C:\obsidian\personal_research_2026\Learning\tech-deep-dive\microsoft-purview")
FORCE = "--force" in sys.argv

SHORTS = [
    ("01-boundary", "Where Microsoft Purview's Boundary Actually Sits", "Where Purview's boundary sits", "Block 1 · scope", "Architecture",
     ["boundary", "defender", "sentinel", "entra", "data map", "dspm", "audit", "capabilit"]),
    ("02-labels-oversharing", "How Sensitivity Labels Stop AI Oversharing", "How sensitivity labels stop AI oversharing", "Block 5 · AI", "AI protections",
     ["sensitivity label", "label", "oversharing", "grounding", "dlp", "copilot", "agent"]),
    ("03-ai-oversharing", "How Purview Blocks AI Oversharing", "How Purview blocks AI oversharing", "Block 5 · AI", "AI protections",
     ["oversharing", "dspm for ai", "sharepoint", "grounding", "permission", "copilot"]),
    ("04-ai-prompts", "How Purview Secures AI Prompts", "How Purview secures AI prompts", "Block 5 · AI", "AI protections",
     ["prompt", "collection policy", "copilotinteraction", "audit", "transcript", "itemclass", "ediscovery"]),
    ("05-snowflake-scan", "How Purview Scans Snowflake (and Breaks)", "How Purview scans Snowflake (and breaks)", "Block 5 · integration", "Data governance",
     ["snowflake", "key pair", "runtime", "data map", "classification", "connector", "metadata"]),
    ("06-snowflake-fail", "Why Purview Snowflake Connections Fail", "Why Snowflake connections fail", "Block 7 · failure modes", "Data governance",
     ["snowflake", "basic auth", "key pair", "azure cli", "salesforce", "connector", "catalog"]),
]


# YouTube IDs (unlisted uploads). Leave "" to play the local MP4 instead.
YOUTUBE = {
    "deep-dive-cut": "KqB4eX0uf-M",
    "01-boundary": "",
    "02-labels-oversharing": "RCx803xilMU",
    "03-ai-oversharing": "",
    "04-ai-prompts": "",
    "05-snowflake-scan": "",
    "06-snowflake-fail": "",
}


def duration(path: Path) -> float:
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
                         capture_output=True, text=True, check=True).stdout
    return float(out.strip())


def copy(src: Path, dst: Path):
    if dst.exists() and not FORCE:
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    print("copied", dst.relative_to(SITE))


def resize(src: Path, dst: Path, width: int, quality=82):
    if dst.exists() and not FORCE:
        return
    im = Image.open(src).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(dst, "JPEG", quality=quality, optimize=True)
    print("resized", dst.relative_to(SITE))


def crop_square(src: Path, dst: Path, cx: int, cy: int, size: int, out=320):
    im = Image.open(src).convert("RGB")
    h = size // 2
    im.crop((cx - h, cy - h, cx + h, cy + h)).resize((out, out), Image.LANCZOS).save(dst, "JPEG", quality=85)
    print("emblem", dst.relative_to(SITE))


def main():
    items = []
    for name, src_title, title, tag, pillar, keywords in SHORTS:
        mp4 = SITE / "media" / "shorts" / f"{name}.mp4"
        copy(NBLM / f"{src_title}.mp4", mp4)
        poster = SITE / "media" / "posters" / f"{name}.webp"
        if FORCE or not poster.exists():
            poster.parent.mkdir(parents=True, exist_ok=True)
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", "4", "-i", str(mp4), "-frames:v", "1",
                            "-vf", "scale=360:-2", "-q:v", "70", str(poster)], check=True)
            print("poster", poster.relative_to(SITE))
        items.append({"id": name, "name": name, "title": title, "tag": tag, "pillar": pillar, "keywords": keywords,
                      "duration": round(duration(mp4)), "poster": f"media/posters/{name}.webp",
                      "file": f"media/shorts/{name}.mp4", "youtube": YOUTUBE.get(name, ""), "status": "ready"})
    catalog = {
        "notebook_alias": "tdd-microsoft-purview",
        "title": "Learn Purview - NotebookLM shorts",
        "deep_dive": {"file": "media/deep-dive-cut.mp4", "youtube": YOUTUBE["deep-dive-cut"]},
        "total": len(items), "ready": len(items), "items": items}
    (SITE / "shorts-catalog.json").write_text(json.dumps(catalog, indent=2), encoding="utf-8")
    (SITE / "shorts-catalog.js").write_text("window.SHORTS = " + json.dumps(catalog) + ";\n", encoding="utf-8")

    copy(OUT / "tdd-microsoft-purview-deep-dive-cut.mp4", SITE / "media" / "deep-dive-cut.mp4")
    copy(NBLM / "Fixing Microsoft Purview Technical Curriculum Gaps.m4a", SITE / "media" / "audio-overview.m4a")

    for i in range(1, 16):
        resize(OUT / "tdd-microsoft-purview-presentation" / f"Slide{i}.JPG",
               SITE / "assets" / "slides" / f"slide-{i:02d}.jpg", 1600)
    for png in (PACK / "assets" / "diagrams").glob("*.png"):
        copy(png, SITE / "assets" / "diagrams" / png.name)

    s1 = OUT / "tdd-microsoft-purview-presentation" / "Slide1.JPG"
    crop_square(s1, SITE / "assets" / "hero.jpg", 1956, 1190, 900)
    crop_square(s1, SITE / "assets" / "security.jpg", 1420, 900, 640)
    crop_square(s1, SITE / "assets" / "governance.jpg", 2490, 900, 640)
    crop_square(s1, SITE / "assets" / "compliance.jpg", 1420, 1480, 640)
    crop_square(s1, SITE / "assets" / "ai.jpg", 2490, 1480, 640)
    for size in (192, 512):
        icon = SITE / "assets" / "icons" / f"icon-{size}.png"
        if FORCE or not icon.exists():
            icon.parent.mkdir(parents=True, exist_ok=True)
            Image.open(SITE / "assets" / "hero.jpg").resize((size, size), Image.LANCZOS).save(icon, "PNG", optimize=True)
            print("icon", icon.relative_to(SITE))


if __name__ == "__main__":
    main()
