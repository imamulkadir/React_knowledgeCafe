# React_knowledgeCafe

**A minimal, well-structured React + Vite starter tailored for a blog / learning-café project.**

> Clean, focused scaffold with Tailwind CSS and ESLint ready — ideal for building small knowledge-sharing/blog apps, tutorials, and demo UIs.

---

## 🚀 Quick links

- Repository: https://github.com/imamulkadir/React_knowledgeCafe
- Source used to generate this README: https://github.com/imamulkadir/React_knowledgeCafe

---

## 🔎 What this repo contains (summary)

This repository is a React + Vite project with Tailwind CSS and linting configuration. The main pieces you’ll see are:

- `public/` — static assets (images, JSON files served as `/filename` at runtime).
- `src/` — React source code (components, pages, styles).
- `index.html` — app entry HTML.
- `package.json` / `package-lock.json` — project dependencies and scripts.
- `tailwind.config.js` — Tailwind configuration.
- `vite.config.js` — Vite config for dev/build.
- `.gitignore`, `eslint.config.js` — ignores and lint rules.

(These files/folders are present in the repo root — see the repo link above.)

---

## ✅ Features & Goals

- Fast developer experience with **Vite** (HMR).
- Utility-first styling via **Tailwind CSS**.
- Linting scaffolding (eslint) to keep the code consistent.
- Simple structure tuned for blog-like UI: images, posts, bookmarks, reading-time, etc.
- Small, educational codebase — easy to extend.

---

## 🧰 Tech stack

- **React** (JSX)
- **Vite** (build + dev server)
- **Tailwind CSS**
- **ESLint** (configured in repo)

---

## 🗂 Suggested folder structure

```knowledge_cafe
    /public
    ├─ images/
    └─ blogs.json ← example blog data (accessible via fetch('/blogs.json'))
    /src
    ├─ components/
    │ ├─ Blog.jsx
    │ └─ Bookmark.jsx
    ├─ pages/
    ├─ App.jsx
    └─ main.jsx
    index.html
    package.json
    tailwind.config.js
    vite.config.js
    README.md
```

> Note: The repository already contains `public/` and `src/` (see repo root).

---

## 1. Install dependencies & Run

```bash
    npm install
    npm run dev
    npm run build //use only for production after finishing the project
```

> **Note:**
> If any script names differ in your `package.json`, use the script names shown there.
> (The repository contains `package.json` and `package-lock.json`.)

## 2. 📝 Using images & public assets

Files placed in the public folder are served at the root of your deployed site.

- Example: `/public/images/cover.jpg` → reference it in JSX as:

```jsx
<img src="/images/cover.jpg" alt="cover" />
```

- Example: fetching a JSON from `public`:

```jsx
useEffect(() => {
  fetch("/blogs.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
```

## 3. ⚠️ Common gotchas & tips

- JSX uses `className` not `class`. Replace any `class` attributes with `className`.
- List keys: When rendering lists, use a stable unique key (e.g. `item.id`); avoid using array index unless the list is static.
- `map()` return: When mapping to JSX, ensure you return the element — use `()` shorthand or `return` inside `{ }`.

```jsx
{
  items.map((it) => <div key={it.id}>{it.title}</div>);
}
```

- Sticky sidebar: To make a sidebar stick while scrolling, prefer `position: sticky` (Tailwind: `sticky top-4`) inside a parent with sufficient height. Use `fixed` only if you want it fully detached from the document flow.
- **Bookmarks dedup**: Guard against duplicates with:

```jsx
if (bookmarks.some((b) => b.id === newItem.id)) {
  alert("Already added");
  return;
}
setBookmarks((prev) => [...prev, newItem]);
```

## 4. ♻️ Contributing

- Fork the repo, create a feature branch (`git checkout -b feat/my-feature`), make changes, and open a PR.
- Keep changes small and focused; explain why in the PR description.
- Add or update README when you add new features or significant refactors.

## 5. 📦 License

Add a license file (e.g., `LICENSE`) if you want this repo to be open-source with explicit terms. If you prefer MIT, add an `MIT` license file.

## 6. 📬 Contact & author

- Author / repo owner: `imamulkadir` (GitHub).

[Repo: ](https://github.com/imamulkadir/React_knowledgeCafe)
