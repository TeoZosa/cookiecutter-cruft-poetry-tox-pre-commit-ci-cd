"""Test cases for the __main__ module."""
# pylint: disable=redefined-outer-name
from functools import partial

import pytest
from typer.testing import CliRunner

from {{cookiecutter.package_name}}.__main__ import __version__, app

from . import utils


@pytest.fixture
def cruft_runner():
    runner = CliRunner()
    yield partial(runner.invoke, app)


def test_main_succeeds(cruft_runner: partial) -> None:
    """It exits with a status code of zero."""
    result = cruft_runner()
    assert result.exit_code == 0


def test_version_option(cruft_runner: partial) -> None:
    """It returns the package version."""
    result = cruft_runner(["--version"])
    assert utils.get_version_number() in result.output


def test_version_determination_logic() -> None:
    """Validates the installed package version against the project-specified version."""
    assert __version__ == utils.get_version_number()
