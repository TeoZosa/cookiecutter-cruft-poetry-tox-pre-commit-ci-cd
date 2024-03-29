"""Sphinx configuration."""
import datetime
import pathlib
import re
import subprocess  # nosec
import sys
from typing import List, Match

import emoji

# Load user-specific env vars (e.g. secrets) from a `.env` file
from sphinx.application import Sphinx

_project_directory = pathlib.Path(__file__).parent.parent.parent


def get_version_number() -> str:
    """
    >>> assert get_version_number()
    """
    prog = "make"
    args = [
        "get-project-version-number",
        "--no-print-directory",
        "-C",
        _project_directory,
    ]
    completion_info = subprocess.run(  # nosec
        [prog, *args],
        capture_output=True,
        text=True,
        check=True,
    )

    return completion_info.stdout.strip()


# pylint: disable=invalid-name

# -- Project information -----------------------------------------------------
project = "cookiecutter-cruft-poetry-tox-pre-commit-ci-cd"
author = "Teo Zosa"
project_copyright = f"{datetime.datetime.now().year}, {author}"
version = release = get_version_number()

# -- General configuration ---------------------------------------------------
extensions = [
    "myst_parser",  # MyST .md parsing (https://myst-parser.readthedocs.io/en/latest/index.html)
    "sphinx.ext.intersphinx",  # Link to other projects’ documentation (https://www.sphinx-doc.org/en/master/usage/extensions/intersphinx.html)
    "sphinx_rtd_theme",  # Sphinx theme used on Read The Docs (https://github.com/readthedocs/sphinx_rtd_theme)
]

rst_prolog = pathlib.Path("global.rst").read_text(encoding="utf-8")

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# List of patterns, relative to source directory, that match files and
#   directories to ignore when looking for source files.
#   This pattern also affects html_static_path and html_extra_path.
exclude_patterns: List[str] = [
    ".DS_Store",
    ".venv",
    "_build",
    "Thumbs.db",
    "global.rst",
]

# Sphinx configs
html_theme = "sphinx_rtd_theme"
html_show_sourcelink = False  # Remove 'view source code' from top of page (for html, not python)

# -- Extension configurations ---------------------------------------------------

# myst_parser configs
# Prefix document path to section labels, to use:
# `path/to/file:heading` instead of just `heading`
autosectionlabel_prefix_document = True
myst_heading_anchors = 3


def convert_emoji_shortcodes(app: Sphinx, exception: Exception) -> None:
    """Convert emoji shortcodes in HTML files to corresponding emoji characters

    Running separately to support Read The Docs builds.
    Adapted from: https://bitbucket.org/lbesson/bin/src/master/emojize.py
    """

    def emojize_match(match: Match) -> str:
        """Convert emoji shortcodes in match to corresponding emoji characters"""
        return emoji.emojize(match.group(), variant="emoji_type", language="alias")

    def emojize_all(text: str) -> str:
        """Convert all emoji shortcodes in text to corresponding emoji characters"""
        return re.sub(r":([a-z0-9_-]+):", emojize_match, text)

    if exception is None:
        for html_file in pathlib.Path(app.outdir).rglob("*.html"):
            html_file.write_text(emojize_all(html_file.read_text()))


def setup(app: Sphinx) -> None:
    """Connects bespoke emoji shortcode conversion post-build function"""
    app.connect("build-finished", convert_emoji_shortcodes)


# -- External mapping --------------------------------------------------------
python_version = ".".join(map(str, sys.version_info[0:2]))
intersphinx_mapping = {
    "sphinx": ("http://www.sphinx-doc.org/en/stable", None),
    "python": ("https://docs.python.org/" + python_version, None),
}
