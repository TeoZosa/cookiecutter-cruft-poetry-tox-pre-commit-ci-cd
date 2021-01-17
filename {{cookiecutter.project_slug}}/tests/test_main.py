"""Test cases for the __main__ module."""
from typer.testing import CliRunner

from {{cookiecutter.package_name}}.__main__ import __version__, app

from . import utils

runner = CliRunner()


def test_main_succeeds() -> None:
    """It exits with a status code of zero."""
    result = runner.invoke(app)
    assert result.exit_code == 0


def test_version_option() -> None:
    """It returns the package version."""
    result = runner.invoke(app, ["--version"])
    assert utils.get_version_number() in result.output

def test_version_determination_logic() -> None:
    """Validates the installed package version against the project-specified version."""
    assert __version__ == utils.get_version_number()
