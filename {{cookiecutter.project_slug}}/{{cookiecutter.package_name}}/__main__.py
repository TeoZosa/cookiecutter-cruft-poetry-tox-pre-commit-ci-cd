"""Command-line interface."""
import click
import structlog_sentry_logger
from dotenv import find_dotenv, load_dotenv

# see `.env` for requisite environment variables
load_dotenv(find_dotenv())
LOGGER = structlog_sentry_logger.get_logger()


@click.command()
@click.version_option()
def main() -> None:
    """{{cookiecutter.friendly_name}}."""
    LOGGER.info(
        "For `structlog_sentry_logger` usage documentation, see: "
        "`Structlog-Sentry-Logger`_"
        "_`Structlog-Sentry-Logger`: https://github.com/TeoZosa/structlog-sentry-logger"
    )


if __name__ == "__main__":
    main(prog_name="{{cookiecutter.project_slug}}")  # pragma: no cover
