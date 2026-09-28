# Learn Purview

![Microsoft Purview blueprint](assets/slides/slide-01.jpg)

A self-contained study console for Microsoft Purview, built for enterprise architects. It follows the same framework as [learn-ai-law](https://github.com/aaronmeis/learn-ai-law): one `index.html`, no build step, progress saved in the browser.

Every claim traces to a 36-row source ledger restricted to Microsoft Learn, Microsoft service descriptions, Microsoft reference architectures, and Microsoft Mechanics. NotebookLM media and reports are included as secondary material with their known errors called out.

## What's here

- `index.html`: the console, published via GitHub Pages from the repo root.
  - **Curriculum:** eight timed blocks (about 7 hours) with action steps, artifact previews, and exit criteria.
  - **Architecture views:** conceptual, logical, physical, integration and AI, plus the government cloud matrix, with diagrams.
  - **Progress map:** 100 / 200 / 300 ladder across five lanes, plus the neighbor systems.
  - **Flashcards and glossary:** 39 terms with spaced repetition.
  - **Shorts and media:** six vertical NotebookLM explainers, the 8.5-minute narrated deep-dive cut, and the audio overview.
  - **Slide deck:** 15 slides, with unsupported claims flagged on the slide.
  - **Quiz:** the 30-question design-review bank.
  - **Prompts, failure modes (20), decision rules, EA mapping (TOGAF / DoDAF), source ledger.**
- `library/`: 38 HTML pages rendered from the Obsidian pack and the NotebookLM exports (views, blocks, mission, day plan, glossary, cheatsheet, quiz bank, source ledger, prompt notes, reports). `[S#]` citations link to the source. Mermaid diagrams render in the browser.
- `assets/`, `media/`: diagrams, slides, emblems, shorts, the deep-dive cut, and the audio overview.
- `scripts/`: rebuild tooling (see below).

## Rebuilding from the vault

The Obsidian pack at `Learning/tech-deep-dive/microsoft-purview/` is the source of truth. After editing it or regenerating the NotebookLM suite:

```
python scripts/stage_assets.py          # copy media from C:\output and the vault (add --force to overwrite)
python scripts/build_library.py         # re-render library/*.html and library/manifest.js
```

Videos play from YouTube (unlisted) when an ID is set in the `YOUTUBE` map at the top of `scripts/stage_assets.py`; otherwise the local MP4 in `media/` plays. Re-run `stage_assets.py` after editing the map.

Requires Python with `markdown`, `pyyaml`, and `Pillow`. The console's own study content (curriculum, quiz, glossary, failure modes) lives in the `DATA` object inside `index.html`.

## Running locally

Open `index.html` directly, or serve the folder so the shorts catalog loads over HTTP:

```
python -m http.server 8765
```

Study material only. Check licensing and government cloud availability against current Microsoft documentation before relying on it.
