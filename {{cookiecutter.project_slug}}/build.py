import pathlib

import mypyc.build


def build(setup_kwargs: dict) -> None:
    """
    This function is mandatory in order to build the extensions.
    """
    build_args = [
        "--disallow-untyped-defs",
        "--ignore-missing-imports",
    ]
    ext_modules = [
        "{{cookiecutter.package_name}}/__init__.py",
        "{{cookiecutter.package_name}}/main.py",
    ]
    paths = build_args + ext_modules

    setup_kwargs.update(
        {
            "ext_modules": mypyc.build.mypycify(paths),
        }
    )
