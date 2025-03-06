---
name: repo
type: repo
agent: CodeActAgent
---

Repository: open-hands-sandbox

Description: Kevin's work logs blog written in Astro.

Directory Structure:
- docs/: Kevin's session logs
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
- `npm run astro ...`: Runs Astro CLI commands (e.g., `astro add`, `astro check`).
- `npm run astro -- --help`: Gets help for the Astro CLI.

Guidelines:
- Refer to the [Astro documentation](https://docs.astro.build) for more information.
- When creating a Pull Request, please follow the instructions in `prompts/summarize.md` to create and commit the session summary before create Pull Request.
- When running `npm run dev`, please pass and set the specified port as a commandline argument.
