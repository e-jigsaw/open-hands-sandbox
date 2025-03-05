---
name: repo
type: repo
agent: CodeActAgent
---

Repository: open-hands-sandbox
Description: An Astro starter kit project, generated from the `basics` template.

Directory Structure:
- docs/: agent's session logs
- prompts/: noted prompts
- src/: main application codes
- public/: static files

Setup:
- To set up the project, run `npm install` to install the dependencies.
- `npm run dev` for development.
Commands:
- `npm install`: Installs dependencies.
- `npm run dev`: Starts the local development server (default port may vary).
- `npm run build`: Builds the production site to `./dist/`.
- `npm run preview`: Previews the build locally.
- `npm run astro ...`: Runs Astro CLI commands (e.g., `astro add`, `astro check`).
- `npm run astro -- --help`: Gets help for the Astro CLI.

Guidelines:
- Refer to the [Astro documentation](https://docs.astro.build) for more information.

When creating a Pull Request, please follow the instructions in prompts/summarize.md to create and commit the session summary, then create the PR.
