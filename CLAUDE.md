# Portfolio site

Static single-page site at `https://soham7777777.github.io/Portfolio/`.
Public repo, GitHub Pages (classic branch-based deploy from `main`, not an
Actions workflow — check `gh api repos/Soham7777777/Portfolio/pages` for
build status, there's nothing to watch under `.github/workflows/`).

## Structure

- `index.html` — the entire site. Bootstrap 5.3.6 + Bootstrap Icons via CDN,
  a thin `style.css`, a tiny `main.js` (back-to-top button + typewriter
  effect). Sections: Hero, About (Bio/Education/Interests), Skills,
  Experience, Projects, Contact — in that order, matching the nav.
- `assets/` — profile photo (`soham.jpg`) and fonts.
- `ResumeLink.txt` — a stale Google Drive link, unrelated to the current
  resume project (`../resume-project`). Not wired into the page.

## Single source of truth: the resume, not this file

Every fact on this page (bio, education, experience bullets, skills,
project descriptions, interests) is copied from `../resume-project`'s
`content.py`, not independently maintained. If the resume changes, this
page goes stale unless updated to match by hand — there's no shared data
source between the two repos (they're plain static HTML + LaTeX, not a
templating system that could import from one place). When updating either
project, check whether the same fact changed on the other side.

## History (worth knowing before assuming intent)

This site was built during the 9brainz internship (early 2025) and left
completely frozen afterward — "computer science student, aspiring
developer," no Experience section at all, stale CPI shown as "pursuing."
It was refreshed in full in 2026-09 to match the resume once it existed:
first-person aspiration language replaced with the same evidence-based
framing as the resume Intro, a real Experience section added (previously
didn't exist), Skills restructured to the resume's actual categories
(dropping a generic "Soft Skills" list), Projects trimmed from 6 to the 3
that match the resume, and a dead PythonAnywhere demo link on the
Wallpaperz project fixed by linking the project name to its GitHub repo
instead. If you find content here that reads like a student bio again,
that's regression, not a stylistic choice — check `../resume-project`'s
`content.py` for what it should say.

## Known stale things not yet fixed

- `ResumeLink.txt`'s Google Drive link is old; nothing on the page
  currently points a viewer to the real, current resume PDF
  (`../resume-project/Soham_Jobanputra_Resume.pdf`). Worth adding a link
  in the Contact section once that PDF has a stable public URL.
