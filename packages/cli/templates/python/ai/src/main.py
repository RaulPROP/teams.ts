import asyncio
import os

from dotenv import load_dotenv
from microsoft.teams.ai import ChatPrompt
from microsoft.teams.apps import App
from microsoft.teams.devtools import DevToolsPlugin
from microsoft.teams.openai import OpenAICompletionsAIModel

# Load variables from a .env file (if present) so os.environ.get() will pick them up.
# Developers should copy `sample.env` -> `.env` to provide local values.
load_dotenv()

app = App(plugins=[DevToolsPlugin()])

# Configure OpenAI model and key from environment (default model: gpt-4o)
MODEL_NAME = os.environ.get("OPENAI_MODEL", "gpt-4o")
OPENAI_KEY = os.environ.get("OPENAI_API_KEY")
model = OpenAICompletionsAIModel(
    model=MODEL_NAME,
    key=OPENAI_KEY,
)


@app.on_message
async def handle_message(ctx):
    prompt = ChatPrompt(model=model)
    result = await prompt.send(ctx.activity.text)
    if result.response.content:
        await ctx.send(result.response.content)


if __name__ == "__main__":
    asyncio.run(app.start())
