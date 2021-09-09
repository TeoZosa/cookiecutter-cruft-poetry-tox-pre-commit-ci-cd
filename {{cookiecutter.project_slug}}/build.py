import mypyc.build


def build(setup_kwargs: dict) -> None:
    """
    This function is mandatory in order to build the extensions.
    """
    setup_kwargs.update(
        {
            "ext_modules": mypyc.build.mypycify(
                [
                    "--disallow-untyped-defs",
                    "--ignore-missing-imports",
                    "{{cookiecutter.package_name}}/__init__.py",
                    "{{cookiecutter.package_name}}/main.py",
                ]
            ),
        }
    )
