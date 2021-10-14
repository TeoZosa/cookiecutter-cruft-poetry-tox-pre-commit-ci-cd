import pathlib

import mypyc.build


def build(setup_kwargs: dict) -> None:
    """
    This function is mandatory in order to build the extensions.
    """
    ext_modules = [
        str(file)
        for file in (
            pathlib.Path(__file__).resolve().parent / "{{cookiecutter.package_name}}"
        ).rglob("*.py")
    ]
    paths = ext_modules

    setup_kwargs.update(
        {
            "ext_modules": mypyc.build.mypycify(paths),
        }
    )
