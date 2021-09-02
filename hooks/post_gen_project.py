import os
import shutil

REMOVE_PATHS = [
    "{% if cookiecutter.adr_documentation_support == 'no' %} docs/source/akm {% endif %}",
    "{% if cookiecutter.adr_documentation_support == 'no' %} docs/source/adr.md {% endif %}",
    "{% if cookiecutter.adr_documentation_support == 'no' %} .github/workflows/publish_log4brains.yml {% endif %}",
]

for path in REMOVE_PATHS:
    path = path.strip()
    if path and os.path.exists(path):
        if os.path.isdir(path):
            shutil.rmtree(path, ignore_errors=True)
        else:
            os.unlink(path)
