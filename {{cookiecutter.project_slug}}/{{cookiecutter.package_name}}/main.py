"""Command-line interface."""
from typing import Optional

import icontract
import importlib_metadata
import rich.console
import rich.table
import structlog_sentry_logger
import typeguard
import typer
from dotenv import find_dotenv, load_dotenv

app = typer.Typer(name="{{cookiecutter.project_slug}}")
__version__ = importlib_metadata.metadata(app.info.name)["Version"]

console = rich.console.Console()

# see `.env` for requisite environment variables
load_dotenv(find_dotenv())
LOGGER = structlog_sentry_logger.get_logger()


@typeguard.typechecked()
@icontract.require(lambda value: value is None or value is True)
def version_callback(
    value: Optional[bool],
) -> None:  # pylint: disable=unsubscriptable-object
    """Provides a version option for the CLI"""
    if value:
        console.print(
            f"{app.info.name.title()} "  # type: ignore[union-attr]
            f"CLI version: {__version__}"
        )
        raise typer.Exit()


@typeguard.typechecked()
@app.command()
def main(
    version: Optional[  # pylint: disable=unsubscriptable-object,unused-argument
        bool
    ] = typer.Option(
        None,
        "--version",
        callback=version_callback,
        is_eager=True,
        help="Show the version and exit.",
    ),
) -> None:
    """{{cookiecutter.friendly_name}}."""
    friendly_project_name = app.info.name.replace("-", " ").title()  # type: ignore[union-attr]
    feature_table = rich.table.Table("Features", title=friendly_project_name)
    feature_table.add_row("CLI application via [link=https://typer.tiangolo.com]Typer")
    feature_table.add_row(
        "Structured logging via "
        "[link=https://structlog-sentry-logger.readthedocs.io/en/latest/]structlog-sentry-logger"
    )
    feature_table.add_row("...")
    feature_table.add_row(
        "For more details, see "
        "[link=https://cookiecutter-cruft-poetry-tox-pre-commit-ci-cd.readthedocs.io/en/latest/]cookiecutter-cruft-poetry-tox-pre-commit-ci-cd"
    )
    console.print(feature_table)

    LOGGER.info(
        "Default application logging via structlog-sentry-logger",
        project_url="https://github.com/TeoZosa/structlog-sentry-logger",
    )
