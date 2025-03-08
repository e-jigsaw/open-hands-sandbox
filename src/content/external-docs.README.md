# External Documentation

This directory contains session summaries imported from other repositories through the GitHub Actions workflow.

## File Structure

Files in this directory follow this naming convention:
```
{owner}-{repo}-{original-filename}.md
```

For example: `e-jigsaw-another-repo-session-123.md`

## Frontmatter Requirements

Each markdown file must include the following frontmatter:

```yaml
---
title: Session Title
description: Brief description of the session
pubDate: 2024-01-01 # Original publication date
sourceRepo: owner/repository-name
importedAt: 2024-01-02T12:34:56Z # ISO timestamp when imported
---
```

## Workflow Process

1. The GitHub Actions workflow runs every 6 hours or can be triggered manually
2. It checks specified repositories for session summaries
3. New summaries are copied here with added metadata
4. A pull request is created if new content is found

## Adding Source Repositories

To add a new source repository:
1. Update the `default_repos` list in the workflow script
2. Or trigger the workflow manually with a comma-separated list of repositories