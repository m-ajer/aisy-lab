# AISy Lab website

A Jekyll site for GitHub Pages. All content lives in a few YAML and Markdown
files, so updating the site never requires touching HTML.

## Publish on GitHub Pages

1. Create a repository (e.g. `aisy-lab`) and push these files to it.
2. In `_config.yml`, set `url` and `baseurl`:
   - project site `https://your-org.github.io/aisy-lab` → `url: "https://your-org.github.io"`, `baseurl: "/aisy-lab"`
   - org/user site (`your-org.github.io` repo) or custom domain → `baseurl: ""`
3. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` / `(root)`.
4. The site is live a minute or two later. Every push rebuilds it.

## Where to edit things

| What | File |
|---|---|
| Lab name, tagline, description, contact, nav | `_config.yml` |
| Research areas (names, colors, descriptions) | `_data/research_areas.yml` |
| People (groups, roles, photos, links, alumni) | `_data/people.yml` |
| Publications | `_data/publications.yml` |
| Projects (one file each) | `_projects/<slug>.md` |
| Colors and fonts | tokens at the top of `assets/css/main.css` |
| Logo / favicon | `assets/img/logo.svg`, `assets/img/favicon.svg` |

### How the pieces connect

- **Areas**: projects and publications list area `id`s in `areas: [...]`. This drives the colored tags and the filter buttons on the Publications page.
- **Lab-member highlighting**: any author whose name exactly matches a name in `people.yml` is shown in bold.
- **Project ↔ publications**: give a publication `project: circuit-atlas` and it appears automatically on `_projects/circuit-atlas.md`.
- **Home page**: shows active projects (`status: active`, ordered by `order`) and publications marked `featured: true`.
- **Photos**: put images in `assets/img/people/` and set `photo: /assets/img/people/name.jpg`. Square images work best. Missing photos fall back to a placeholder.

### Add a project

Copy any file in `_projects/`, rename it (the file name becomes the URL, e.g. `/projects/my-project/`), and edit the front matter.

## Preview locally (optional)

Requires Ruby.

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000/aisy-lab/
```
