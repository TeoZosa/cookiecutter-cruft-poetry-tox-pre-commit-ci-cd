import os
import shutil

REMOVE_PATHS = [
    "{% if cookiecutter.adr_documentation_support == 'no' %} .log4brains.yml {% endif %}",
    "{% if cookiecutter.adr_documentation_support == 'no' %} docs/source/akm {% endif %}",
    "{% if cookiecutter.adr_documentation_support == 'no' %} docs/source/adr.md {% endif %}",
    "{% if cookiecutter.adr_documentation_support == 'no' %} .github/workflows/publish_log4brains.yml {% endif %}",
    "{% if cookiecutter.project_boilerplate_type == 'none' %} {{cookiecutter.package_name}}/main.py {% endif %}",
    "{% if cookiecutter.project_boilerplate_type == 'none' %} tests/test_main.py {% endif %}",
    "{% if cookiecutter.jupyter_notebook_project == 'yes' %} {{cookiecutter.package_name}}/entrypoint {% endif %}",
    "{% if cookiecutter.jupyter_notebook_project == 'yes' %} build.py {% endif %}",
    "{% if cookiecutter.jupyter_notebook_project == 'no' %} {{cookiecutter.package_name}}/example.ipynb {% endif %}",
    # i.e., `hybrid` or `no`
    "{% if cookiecutter.jupyter_notebook_project == 'yes' %} .gitattributes {% endif %}",
    "{% if cookiecutter.jupyter_notebook_project == 'yes' %} .github/workflows/publish_benchmarks.yml {% endif %}",
]

for path in REMOVE_PATHS:
    path = path.strip()
    if path and os.path.exists(path):
        if os.path.isdir(path):
            shutil.rmtree(path, ignore_errors=True)
        else:
            os.unlink(path)
