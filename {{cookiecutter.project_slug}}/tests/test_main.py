"""Test cases for the __main__ module."""
# pylint: disable=redefined-outer-name
from functools import partial
from typing import Optional

import pytest
from hypothesis import given, infer, strategies as st
from typer.testing import CliRunner

from {{cookiecutter.package_name}}.__main__ import (
    __version__,
    app,
    version_callback,
)

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


def _test_version_callback(value: Optional[bool]) -> None:
    """It exits cleanly if true or is not executed"""
    if value:
        with pytest.raises(RuntimeError) as excinfo:
            version_callback(value)
        assert excinfo.value.exit_code == 0  # type: ignore[attr-defined]
    else:
        assert version_callback(value) is None


@given(value=infer)
def test_version_callback_inferred_from_type_annotation(value: Optional[bool]) -> None:
    _test_version_callback(value)

@given(value=st.booleans())
def test_version_callback_user_defined_strategy(value) -> None:
    _test_version_callback(value)

def test_version_determination_logic() -> None:
    """Validates the installed package version against the project-specified version."""
    assert __version__ == utils.get_version_number()
