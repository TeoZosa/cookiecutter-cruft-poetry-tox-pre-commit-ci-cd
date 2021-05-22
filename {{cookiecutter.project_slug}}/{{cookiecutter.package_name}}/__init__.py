"""{{cookiecutter.friendly_name}}."""
from typing import List

import sentry_sdk
from dotenv import find_dotenv, load_dotenv

__all__: List[str] = []

load_dotenv(find_dotenv())
# Note: if DSN isn't defined, will silently not transmit telemetry
sentry_sdk.init()  # pylint: disable=abstract-class-instantiated
