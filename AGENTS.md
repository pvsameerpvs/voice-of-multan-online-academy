# AGENTS.md

## Git Policy — Manual Only

Git operations are **strictly manual**. The user runs all git commands themselves.

- NEVER run `git add`, `git commit`, `git push`, `git pull`, `git fetch`, `git merge`, `git rebase`, `git stash`, `git reset`, `git branch`, or any other git command that modifies the repository.
- NEVER run `git init`, `git remote add`, or similar setup commands.
- NEVER stage, commit, or push changes — not even when explicitly asked by the user.
- NEVER create branches, tags, or pull requests.
- Read-only git inspection (`git status`, `git diff`, `git log`) is allowed only when needed to understand the codebase, but it is still best to avoid it unless necessary.

## Workflow

1. Make code changes.
2. Report the changes to the user and provide the git commands they should run themselves (e.g., `git add . && git commit -m "message"`).
3. The user handles all staging, committing, and pushing manually.