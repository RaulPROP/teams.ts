# Python Teams Echo Bot

This is a minimal Microsoft Teams echo bot template using [microsoft-teams](https://github.com/microsoft/teams.py).

## Structure

- `src/main.py`: Main application code for the Teams bot.
- `pyproject.toml`: Project dependencies and metadata (use [uv](https://github.com/astral-sh/uv) for dependency management).
- `apppackage/`: Teams app manifest and related files.

## Getting Started

1. Install [uv](https://github.com/astral-sh/uv).
2. Run:
   ```
   uv venv && uv sync && uv run src/main.py
   ```
