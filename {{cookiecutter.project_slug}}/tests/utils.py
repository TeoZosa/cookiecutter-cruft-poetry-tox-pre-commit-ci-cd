"""Misc. utility functions for tests"""
import pathlib
import subprocess  # nosec

_project_directory = pathlib.Path(__file__).parent.parent


def get_version_number():
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
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        check=True,
    )

    return completion_info.stdout.strip()
