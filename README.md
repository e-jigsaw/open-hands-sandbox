# Kevin's Work Logs Site

A simple work logs site built with Astro, featuring markdown-based content management and a clean, responsive layout.

🌐 **Live Site**: [https://open-hands-sandbox.jgsw.workers.dev](https://open-hands-sandbox.jgsw.workers.dev)

## Features

- Markdown-based content management
- Clean and responsive layout
- Automatic document listing
- Individual document pages with consistent styling
- Easy navigation with header links

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   └── docs/          # Markdown content files
│   ├── layouts/
│   │   ├── Layout.astro   # Base layout
│   │   └── DocsLayout.astro # Document-specific layout
│   └── pages/
│       ├── index.astro    # Home page
│       └── docs/[...slug].astro # Dynamic document routes
└── package.json
```

## Development

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:55959`     |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Deployment

The site is deployed to Cloudflare Workers using Wrangler. The deployment process is automated through GitHub Actions.
