{{cookiecutter.project_name}}
==============================
{%- if 'github' in cookiecutter.remote_vcs_url %}
![CI]({{ cookiecutter.project_repository_url }}/workflows/CI/badge.svg)
![codecov](https://codecov.io/gh/{{cookiecutter.remote_vcs_username}}/{{cookiecutter.project_slug}}/branch/master/graph/badge.svg?token=3HF21UWY82)
![License](https://img.shields.io/github/license/{{cookiecutter.remote_vcs_username}}/{{cookiecutter.project_slug}}?style=plastic)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/{{cookiecutter.project_slug}}?style=plastic)
![PyPI](https://img.shields.io/pypi/v/{{cookiecutter.project_slug}}?color=informational&style=plastic)
{%- endif %}
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![powered by semgrep](https://img.shields.io/badge/powered%20by-semgrep-1B2F3D?labelColor=lightgrey&link=https://semgrep.dev/&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAABmJLR0QA/gD+AP+cH+QUAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH5AYMEy0l8dkqrQAAAvFJREFUKBUB5gIZ/QEAAP8BAAAAAAMG6AD9+hn/GzA//wD//wAAAAD+AAAAAgABAQDl0MEBAwbmAf36GQAAAAAAAQEC9QH//gv/Gi1GFQEC+OoAAAAAAAAAAAABAQAA//8AAAAAAAAAAAD//ggX5tO66gID9AEBFSRxAgYLzRQAAADpAAAAAP7+/gDl0cMPAAAA+wAAAPkbLz39AgICAAAAAAAAAAAs+vU12AEbLz4bAAAA5P8AAAAA//4A5NDDEwEBAO///wABAQEAAP//ABwcMD7hAQEBAAAAAAAAAAAaAgAAAOAAAAAAAQEBAOXRwxUAAADw//8AAgAAAAD//wAAAAAA5OXRwhcAAQEAAAAAAAAAAOICAAAABP3+/gDjzsAT//8A7gAAAAEAAAD+AAAA/wAAAAAAAAAA//8A7ePOwA/+/v4AAAAABAIAAAAAAAAAAAAAAO8AAAABAAAAAAAAAAIAAAABAAAAAAAAAAgAAAD/AAAA8wAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAA8AAAAEAAAA/gAAAP8AAAADAAAA/gAAAP8AAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAA7wAAAPsAAAARAAAABAAAAP4AAAAAAAAAAgAAABYAAAAAAAAAAAIAAAD8AwICAB0yQP78/v4GAAAA/wAAAPAAAAD9AAAA/wAAAPr9//8aHTJA6AICAgAAAAD8AgAAADIAAAAAAP//AB4wPvgAAAARAQEA/gEBAP4BAQABAAAAGB0vPeIA//8AAAAAAAAAABAC+vUz1QAAAA8AAAAAAwMDABwwPu3//wAe//8AAv//ABAcMD7lAwMDAAAAAAAAAAAG+vU0+QEBAvUB//4L/xotRhUBAvjqAAAAAAAAAAAAAQEAAP//AAAAAAAAAAAA//4IF+bTuuoCA/QBAQAA/wEAAAAAAwboAP36Gf8bMD//AP//AAAAAP4AAAACAAEBAOXQwQEDBuYB/foZAAAAAAD4I6qbK3+1zQAAAABJRU5ErkJggg==)](https://semgrep.dev/)
{% if 'gitlab' in cookiecutter.remote_vcs_url %}
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-green?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjUgNSAzNzAgMzcwIj48Y2lyY2xlIGN4PSIxODkiIGN5PSIxOTAiIHI9IjE4NCIgZmlsbD0iI2ZlMiIvPjxwYXRoIGZpbGw9IiM4YmIiIGQ9Ik0yNTEgMjU2bC0zOC0zOGExNyAxNyAwIDAxMC0yNGw1Ni01NmMyLTIgMi02IDAtN2wtMjAtMjFhNSA1IDAgMDAtNyAwbC0xMyAxMi05LTggMTMtMTNhMTcgMTcgMCAwMTI0IDBsMjEgMjFjNyA3IDcgMTcgMCAyNGwtNTYgNTdhNSA1IDAgMDAwIDdsMzggMzh6Ii8+PHBhdGggZmlsbD0iI2Q1MSIgZD0iTTMwMCAyODhsLTggOGMtNCA0LTExIDQtMTYgMGwtNDYtNDZjLTUtNS01LTEyIDAtMTZsOC04YzQtNCAxMS00IDE1IDBsNDcgNDdjNCA0IDQgMTEgMCAxNXoiLz48cGF0aCBmaWxsPSIjYjMwIiBkPSJNMjg1IDI1OGw3IDdjNCA0IDQgMTEgMCAxNWwtOCA4Yy00IDQtMTEgNC0xNiAwbC02LTdjNCA1IDExIDUgMTUgMGw4LTdjNC01IDQtMTIgMC0xNnoiLz48cGF0aCBmaWxsPSIjYTMwIiBkPSJNMjkxIDI2NGw4IDhjNCA0IDQgMTEgMCAxNmwtOCA3Yy00IDUtMTEgNS0xNSAwbC05LThjNSA1IDEyIDUgMTYgMGw4LThjNC00IDQtMTEgMC0xNXoiLz48cGF0aCBmaWxsPSIjZTYyIiBkPSJNMjYwIDIzM2wtNC00Yy02LTYtMTctNi0yMyAwLTcgNy03IDE3IDAgMjRsNCA0Yy00LTUtNC0xMSAwLTE2bDgtOGM0LTQgMTEtNCAxNSAweiIvPjxwYXRoIGZpbGw9IiNiNDAiIGQ9Ik0yODQgMzA0Yy00IDAtOC0xLTExLTRsLTQ3LTQ3Yy02LTYtNi0xNiAwLTIybDgtOGM2LTYgMTYtNiAyMiAwbDQ3IDQ2YzYgNyA2IDE3IDAgMjNsLTggOGMtMyAzLTcgNC0xMSA0em0tMzktNzZjLTEgMC0zIDAtNCAybC04IDdjLTIgMy0yIDcgMCA5bDQ3IDQ3YTYgNiAwIDAwOSAwbDctOGMzLTIgMy02IDAtOWwtNDYtNDZjLTItMi0zLTItNS0yeiIvPjxwYXRoIGZpbGw9IiMxY2MiIGQ9Ik0xNTIgMTEzbDE4LTE4IDE4IDE4LTE4IDE4em0xLTM1bDE4LTE4IDE4IDE4LTE4IDE4em0tOTAgODlsMTgtMTggMTggMTgtMTggMTh6bTM1LTM2bDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMxZGQiIGQ9Ik0xMzQgMTMxbDE4LTE4IDE4IDE4LTE4IDE4em0tMzUgMzZsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzJiYiIgZD0iTTExNiAxNDlsMTgtMTggMTggMTgtMTggMTh6bTU0LTU0bDE4LTE4IDE4IDE4LTE4IDE4em0tODkgOTBsMTgtMTggMTggMTgtMTggMTh6bTEzOS04NWwyMyAyM2M0IDQgNCAxMSAwIDE2TDE0MiAyNDBjLTQgNC0xMSA0LTE1IDBsLTI0LTI0Yy00LTQtNC0xMSAwLTE1bDEwMS0xMDFjNS01IDEyLTUgMTYgMHoiLz48cGF0aCBmaWxsPSIjM2VlIiBkPSJNMTM0IDk1bDE4LTE4IDE4IDE4LTE4IDE4em0tNTQgMThsMTgtMTcgMTggMTctMTggMTh6bTU1LTUzbDE4LTE4IDE4IDE4LTE4IDE4em05MyA0OGwtOC04Yy00LTUtMTEtNS0xNiAwTDEwMyAyMDFjLTQgNC00IDExIDAgMTVsOCA4Yy00LTQtNC0xMSAwLTE1bDEwMS0xMDFjNS00IDEyLTQgMTYgMHoiLz48cGF0aCBmaWxsPSIjOWVlIiBkPSJNMjcgMTMxbDE4LTE4IDE4IDE4LTE4IDE4em01NC01M2wxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjMGFhIiBkPSJNMjMwIDExMGwxMyAxM2M0IDQgNCAxMSAwIDE2TDE0MiAyNDBjLTQgNC0xMSA0LTE1IDBsLTEzLTEzYzQgNCAxMSA0IDE1IDBsMTAxLTEwMWM1LTUgNS0xMSAwLTE2eiIvPjxwYXRoIGZpbGw9IiMxYWIiIGQ9Ik0xMzQgMjQ4Yy00IDAtOC0yLTExLTVsLTIzLTIzYTE2IDE2IDAgMDEwLTIzTDIwMSA5NmExNiAxNiAwIDAxMjIgMGwyNCAyNGM2IDYgNiAxNiAwIDIyTDE0NiAyNDNjLTMgMy03IDUtMTIgNXptNzgtMTQ3bC00IDItMTAxIDEwMWE2IDYgMCAwMDAgOWwyMyAyM2E2IDYgMCAwMDkgMGwxMDEtMTAxYTYgNiAwIDAwMC05bC0yNC0yMy00LTJ6Ii8+PC9zdmc+)](https://renovatebot.com/)
{% endif %}

---

**Documentation**: [{{cookiecutter.documentation_url}}]({{cookiecutter.documentation_url}})

**Source Code**: [{{ cookiecutter.project_repository_url }}]({{ cookiecutter.project_repository_url }})

---

:teacher: Overview
------------------

- TODO

:sparkles: Features
-------------------

- TODO

:information_source: Requirements
---------------------------------

- TODO

------------

Table of Contents
<!-- toc -->

{%- if cookiecutter.project_type == 'package' %}
:tada: Installation
===================

You can install {{cookiecutter.friendly_name}} via [pip](https://pip.pypa.io/):

 ```shell script
pip install {{cookiecutter.project_slug}}
```
{%- endif %}

:rocket: Usage
==============

- TODO
    - High-level usage overview

------------

- TODO
    - Step 0 description

{%- if cookiecutter.project_type == 'package' %}

```python
import {{cookiecutter.package_name}}

# TODO
```
{%- endif %}

> :memo: **Note**  
> All following commands are relative to the project root directory and assume
> `make` is installed.

{% set PROJECT_TYPE = 'jupyter' if cookiecutter.jupyter_notebook_project == 'yes' else 'project' %}

:children_crossing: Running The {{ 'Notebooks' if PROJECT_TYPE == 'jupyter' else PROJECT_TYPE.title() }}
----------------------------------------

{%- if PROJECT_TYPE == 'jupyter' %}
To facilitate your interacting with notebooks with the minimal amount of
friction, here are two suggested options, in order of simplicity:
{%- endif %}

### :one: Docker Container {{ PROJECT_TYPE.title() }} Environment (recommended)

Run:

```shell script
# Uncomment below to run with corresponding options.
{% if PROJECT_TYPE == 'jupyter' -%} #export PORT=8888 # default value; change this value if you need to run the container on a different port {%- endif %}
# Note: *any* value other than `false` will trigger an option
#export IS_INTERACTIVE_SESSION=true
#export BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER=true
make deploy-{{ PROJECT_TYPE }}-docker-container
```

which will fetch and run the project container image
{%- if PROJECT_TYPE == 'jupyter' %}
that launches a Jupyter notebook environment preloaded with all the production
dependencies on `127.0.0.1:8888`.

You can then navigate to the Jupyter notebook URL displayed on your console
{%- endif %}.

> :fire: **Tip**  
> If you prefer to build and run the container locally, run:
>  ```shell script
>  make deploy-{{ PROJECT_TYPE }}-docker-container-local
>  ```

### :two: Locally via Poetry (development workflow)

Run:

 ```shell script
make provision-environment # Note: installs ALL dependencies!
poetry shell # Activate the project's virtual environment
{% if PROJECT_TYPE == 'jupyter' -%} jupyter notebook # Launch the Jupyter server {%- endif %}
```

:wrench: Development
====================

For convenience, implementation details of the below processes are abstracted away and
encapsulated in single [Make](https://www.gnu.org/software/make/) targets.


> :fire: **Tip**  
> Invoking `make` without any arguments will display
> auto-generated documentation on available commands.

:building_construction: Package and Dependencies Installation
-------------------------------------------------------------

Make sure you have Python 3.7+ and [`poetry`](https://python-poetry.org/)
installed and configured.

To install the package and all dev dependencies, run:

```shell script
make provision-environment
```

> :fire: **Tip**  
> Invoking the above without `poetry` installed will emit a
> helpful error message letting you know how you can install Poetry.

:package: Python Module to C-Extension Compilation
--------------------------------------------------

{%- if cookiecutter.project_type == 'package' %}
The projects's [build.py](./build.py) file specifies which modules to package.
{%- endif %}

For manual per-module compilation, see:
[Mypyc Documentation: Getting started - Compiling and running](https://mypyc.readthedocs.io/en/latest/getting_started.html#compiling-and-running)

:whale: Docker Container Image Building/Deployment Orchestration
----------------------------------------------------------------

The following set of `make` targets orchestrate the project's container image build and
deploy steps:

```shell
build-container     Build {{cookiecutter.project_slug}} container
deploy-{{ PROJECT_TYPE }}-docker-container Deploy downloaded dockerized {{ PROJECT_TYPE }} environment with preloaded dependencies
deploy-{{ PROJECT_TYPE }}-docker-container-local Deploy locally-built dockerized {{ PROJECT_TYPE }} environment with preloaded dependencies
pull-container      Pull {{cookiecutter.project_slug}} container
push-container      Push {{cookiecutter.project_slug}} container
stop-container      Stop container forcefully (i.e., when keyboard interrupts are disabled)
```

Note that the project's container image is insulated from the implementation details of
the application's top-level setup and execution logic, which falls under the purview of
the project's entrypoint script. As such, Dockerfile modifications will generally only
be necessary when updating non-Python environment dependencies (Python dependency
updates are automatically reflected in new image builds via the `pyproject.toml`
and `poetry.lock` files).

:white_check_mark: Testing
--------------------------

We use [`tox`](https://tox.readthedocs.io/en/latest/)
and [`pytest`](https://pytest.readthedocs.io/) for our test automation and testing
frameworks, respectively.

To invoke the tests, run:

```shell script
make test
```

Run [mutation tests](https://opensource.com/article/20/7/mutmut-python) to validate test
suite robustness (Optional):

```shell script
make test-mutations
```

> :memo: **Note**  
> Test time scales with the complexity of the codebase. Results are cached
> in `.mutmut-cache`, so once you get past the initial [cold start problem](https://en.wikipedia.org/wiki/Cold_start_(recommender_systems)),
> subsequent mutation test runs will be much faster; new mutations will only
> be applied to modified code paths.

:rotating_light: Code Quality
-----------------------------

We use [`pre-commit`](https://pre-commit.com/) for our static analysis automation and
management framework.

To invoke the analyses and auto-formatting over all version-controlled files, run:

```shell script
make lint
```

> :rotating_light: **Danger**  
> CI will fail if either testing or code quality fail,
> so it is recommended to automatically run the above locally
> prior to every commit that is pushed.

### :arrows_counterclockwise: Automate via Git Pre-Commit Hooks

To automatically run code quality validation on every commit (over to-be-committed
files), run:

```shell script
make install-pre-commit-hooks
```

> :warning:️ Warning  
> This will prevent commits if any single pre-commit hook fails
> (unless it is allowed to fail)
> or a file is modified by an auto-formatting job;
> in the latter case, you may simply repeat the commit and it should pass.

:memo: Documentation
--------------------

```shell script
make docs-clean docs-html
```

> :memo: **Note**  
> For faster feedback loops, this will attempt to automatically open the newly
> built documentation static HTML in your browser.

:clipboard: Summary
===================

- TODO

:books: Further Reading
=======================

- TODO

---

:judge: Legal
=============

:page_facing_up: License
------------------------

{{cookiecutter.project_name}} is licensed under the Apache License, Version 2.0.
See [LICENSE](./LICENSE) for the full license text.


:busts_in_silhouette: Credits
-----------------------------

This project was generated from
[`@TeoZosa`'s](https://github.com/TeoZosa)
[`cookiecutter-cruft-poetry-tox-pre-commit-ci-cd`](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd)
template.
