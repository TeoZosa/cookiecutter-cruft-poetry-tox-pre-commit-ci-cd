```{include} readme.md
```

```{eval-rst}
.. toctree::
   :hidden:
   :maxdepth: 1

   readme
   usage
   API Reference <autoapi/{{cookiecutter.package_name}}/index>
   {% if cookiecutter.project_type == 'package' -%} Developer Reference <autoapi/{{cookiecutter.package_name}}/PATH_TO_HIDDEN_MODULES/index> {%- endif %}
   contributing
   Code of Conduct <codeofconduct>
   License <license>
   Changelog <changelog>
   Service Design and Production Deployment Documentation <production-readiness-checklist>
   Architecture Decision Records <adr>
```
