"""Test cases for the __main__ module."""
from typer.testing import CliRunner

from {{cookiecutter.package_name}}.__main__ import app

runner = CliRunner()


def test_main_succeeds() -> None:
    """It exits with a status code of zero."""
    result = runner.invoke(app)
    assert result.exit_code == 0

def test_version_option() -> None:
    """It returns the package version."""
    result = runner.invoke(app, ["--version"])
    assert "0.0.0" in result.output
