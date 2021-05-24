cookiecutter-cruft-poetry-tox-pre-commit-ci-cd
===============================================

[![Status](https://badgen.net/badge/status/alpha/d8624d)](https://badgen.net/badge/status/alpha/d8624d)
![CI](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/workflows/CI/badge.svg)
![codecov](https://codecov.io/gh/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/branch/master/graph/badge.svg?token=3HF21UWY82)
![License](https://img.shields.io/github/license/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd?style=plastic)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance?style=plastic)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![powered by semgrep](https://img.shields.io/badge/powered%20by-semgrep-1B2F3D?labelColor=lightgrey&link=https://semgrep.dev/&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAABmJLR0QA/gD+AP+cH+QUAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH5AYMEy0l8dkqrQAAAvFJREFUKBUB5gIZ/QEAAP8BAAAAAAMG6AD9+hn/GzA//wD//wAAAAD+AAAAAgABAQDl0MEBAwbmAf36GQAAAAAAAQEC9QH//gv/Gi1GFQEC+OoAAAAAAAAAAAABAQAA//8AAAAAAAAAAAD//ggX5tO66gID9AEBFSRxAgYLzRQAAADpAAAAAP7+/gDl0cMPAAAA+wAAAPkbLz39AgICAAAAAAAAAAAs+vU12AEbLz4bAAAA5P8AAAAA//4A5NDDEwEBAO///wABAQEAAP//ABwcMD7hAQEBAAAAAAAAAAAaAgAAAOAAAAAAAQEBAOXRwxUAAADw//8AAgAAAAD//wAAAAAA5OXRwhcAAQEAAAAAAAAAAOICAAAABP3+/gDjzsAT//8A7gAAAAEAAAD+AAAA/wAAAAAAAAAA//8A7ePOwA/+/v4AAAAABAIAAAAAAAAAAAAAAO8AAAABAAAAAAAAAAIAAAABAAAAAAAAAAgAAAD/AAAA8wAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAA8AAAAEAAAA/gAAAP8AAAADAAAA/gAAAP8AAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAA7wAAAPsAAAARAAAABAAAAP4AAAAAAAAAAgAAABYAAAAAAAAAAAIAAAD8AwICAB0yQP78/v4GAAAA/wAAAPAAAAD9AAAA/wAAAPr9//8aHTJA6AICAgAAAAD8AgAAADIAAAAAAP//AB4wPvgAAAARAQEA/gEBAP4BAQABAAAAGB0vPeIA//8AAAAAAAAAABAC+vUz1QAAAA8AAAAAAwMDABwwPu3//wAe//8AAv//ABAcMD7lAwMDAAAAAAAAAAAG+vU0+QEBAvUB//4L/xotRhUBAvjqAAAAAAAAAAAAAQEAAP//AAAAAAAAAAAA//4IF+bTuuoCA/QBAQAA/wEAAAAAAwboAP36Gf8bMD//AP//AAAAAP4AAAACAAEBAOXQwQEDBuYB/foZAAAAAAD4I6qbK3+1zQAAAABJRU5ErkJggg==)](https://semgrep.dev/)

---

**Documentation**: [https://cookiecutter-cruft-poetry-tox-pre-commit-ci-cd.readthedocs.io](https://cookiecutter-cruft-poetry-tox-pre-commit-ci-cd.readthedocs.io)

**Source Code**: [https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd)

---

A robust and extensible (nearly feature-complete), DevSecOps-centric
[Cookiecutter](https://github.com/audreyr/cookiecutter) template for Python
packages and/or projects with rich automated tooling for high-quality software
development and maintenance, from testing and code quality to documentation
and template synchronization.

Pre-configured to seamlessly run both locally and via the GitHub Actions CI/CD
system to not only provide powerful guardrails and out-of-the-box audit trails,
but significant quality of life improvements such as automated dependency
upgrades, PR-based release notes, and many other high-level features for agile,
defect-free software development.

Best of all, best practices are baked in order to provide you with the best
foundation on which you can build your best work!

> 📝 **Note**  
> **_Very_** heavily influenced by the amazing
> [`cookiecutter-hypermodern-python`](https://github.com/cjolowicz/cookiecutter-hypermodern-python) project
> from [@cjolowicz](https://github.com/cjolowicz)
> based on the fantastic
> [`Hypermodern Python`](https://cjolowicz.github.io/posts/hypermodern-python-01-setup/) article series.

---

Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
  * [Standardized Developer Workflow Orchestration](#standardized-developer-workflow-orchestration)
  * [Conditionally Rendered Python Package/Project Boilerplate](#conditionally-rendered-python-packageproject-boilerplate)
  * [Docker Image Build/Push/Deploy Orchestration](#docker-image-buildpushdeploy-orchestration)
  * [Monitoring and Observability](#monitoring-and-observability)
  * [Type Checking and Data Validation](#type-checking-and-data-validation)
  * [Testing](#testing)
  * [Code Coverage](#code-coverage)
  * [Security](#security)
  * [Linting](#linting)
  * [CI/CD](#cicd)
  * [Documentation](#documentation)
- [Legal](#legal)
  * [License](#license)

<!-- tocstop -->

Installation
============

Via [`cruft`](https://cruft.github.io/cruft/) (recommended):
```shell script
cruft create https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd
```

Via [`cookiecutter`](https://github.com/audreyr/cookiecutter):
```shell script
cookiecutter gh:TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd
```
Note: **_Cookiecutter_** uses `gh:` as short-hand for `https://github.com/`

Usage
=====
If the project was originally installed via
[`cookiecutter`](https://github.com/audreyr/cookiecutter), you must first use
[`cruft`](https://cruft.github.io/cruft/) to link the project with the original
template:

```shell script
cruft link https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd
```

Then/else:
```shell script
cruft update
```

Features
========

Standardized Developer Workflow Orchestration
---------------------------------------------
- Packaging and dependency management
  with [Poetry](https://python-poetry.org/)
- Project workflow orchestration
  with [Make](https://www.gnu.org/software/make/)
  via self-documenting [Makefile](./{{cookiecutter.project_slug}}/Makefile)
- Automated Cookiecutter template synchronization
  with [cruft](https://cruft.github.io/cruft/)

Conditionally Rendered Python Package/Project Boilerplate
---------------------------------------------------------
- Command-line interface
  with [Typer](https://typer.tiangolo.com/)
- [Optional] [Jupyter](https://jupyter.org/) support[*](#conditional-rendering)

Docker Image Build/Push/Deploy Orchestration
--------------------------------------------
- Project-specific Dockerfile[*](#conditional-rendering) that
  installs production dependencies for a completely reproducible execution
  environment
- `build`/`push`/`pull`/`deploy` logic abstracted into corresponding `make`
  targets, providing full automation with minimal friction

Monitoring and Observability
----------------------------
- [Optional] Exception monitoring
  with [Sentry](https://sentry.io/welcome/)
  - see: the cookiecutter's [.env]({{cookiecutter.project_slug}}/.env) file for
    a detailed activation guide
- Structured logging
  with [structlog-sentry-logger](https://structlog-sentry-logger.readthedocs.io/en/latest/) (via [structlog](https://www.structlog.org/en/stable/))
    - Granular control flow context logging (via call stack introspection):
        - Namespaced module-specific loggers
        - Function name logging
    - Environment-dependent standard output stream log formatting:
        - Production: JSON logs
        - Development: Colorized human-readable logs, with JSON logs saved
          locally for retrospective analysis
    - [Optional] Exception logging to Sentry with
      [structlog-sentry](https://www.structlog.org/en/stable/)

Type Checking and Data Validation
---------------------------------
- Static type-checking
  with [mypy](http://mypy-lang.org/)[†](#jupyter-compatibility-via-nbqa)
- Run-time type-checking
  with [typeguard](https://github.com/agronholm/typeguard)
    - See the
      [typeguard user guide](https://typeguard.readthedocs.io/en/latest/userguide.html?highlight=@typechecked#using-the-decorator)
      for usage overview
- [Design-by-contract](https://en.wikipedia.org/wiki/Design_by_contract) support
  (precondition, postcondition, and invariant enforcement)
  with [icontract](https://github.com/Parquery/icontract)
  - See [the test benchmarks](./tests/test_icontract_benchmark.py)
    for [example performance overhead measurements](https://teozosa.github.io/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/dev/py39-benchmark/)

Testing
-------
- Test automation
  with [Tox](https://tox.readthedocs.io/en/latest/)
- Testing
  with [pytest](https://docs.pytest.org/en/latest/)
- Doctests
  with [xdoctest](https://xdoctest.readthedocs.io/)[†](#jupyter-compatibility-via-nbqa)
- [Performance testing](https://en.wikipedia.org/wiki/Software_performance_testing)
  with [pytest-benchmark](https://pytest-benchmark.readthedocs.io/en/stable/index.html)
- [Property-based testing](https://hypothesis.works/articles/what-is-property-based-testing/)
  with [hypothesis](https://github.com/HypothesisWorks/hypothesis)
    - [Design-by-contract](#type-checking-and-data-validation) integration
      (i.e. to intelligently constrain the input space defined by the search strategy)
      via [icontract-hypothesis](https://github.com/mristin/icontract-hypothesis)
- [Mutation testing](https://en.wikipedia.org/wiki/Mutation_testing)
  with [mutmut](https://github.com/boxed/mutmut)

> 📝 **Note**  
>  For a good overview of how property-based testing and mutation testing
>  work together to improve the value and quality of your tests, see
>  [this stackoverflow post](https://stackoverflow.com/a/38704078/6470891)
>  and the
>  [follow-up by the `mutmut` author](https://stackoverflow.com/a/61849772/6470891).

Code Coverage
-------------
- Code coverage
  with [Coverage.py](https://coverage.readthedocs.io/)
- Coverage reporting
  with [Codecov](https://codecov.io/)

Security
--------
- Static application security testing (SAST)
  with [Bandit](https://github.com/PyCQA/bandit)[†](#jupyter-compatibility-via-nbqa)
  and [Safety](https://github.com/pyupio/safety)

Linting
-------
- Automation and management
  with [pre-commit](https://pre-commit.com/)
- Code quality:
    - [FlakeHell](https://github.com/life4/flakehell)
    - [Pylint](https://www.pylint.org/)[†](#jupyter-compatibility-via-nbqa)
    - [pyupgrade](https://github.com/asottile/pyupgrade)[†](#jupyter-compatibility-via-nbqa)
- Code formatting:
    - [Black](https://github.com/psf/black)[†](#jupyter-compatibility-via-nbqa)
    - [isort](https://github.com/timothycrosley/isort)[†](#jupyter-compatibility-via-nbqa)
    - [shfmt](https://github.com/mvdan/sh)
    - [pretty-format-json](https://github.com/pre-commit/pre-commit-hooks#pretty-format-json)
    - (trim) [trailing-whitespace](https://github.com/pre-commit/pre-commit-hooks#trailing-whitespace)
    - [end-of-file-fixer](https://github.com/pre-commit/pre-commit-hooks#end-of-file-fixer)
- Unsanitary commits:
  - Secrets
    with [detect-secrets](https://github.com/Yelp/detect-secrets)
  - Debugger imports and py37+ `breakpoint()` calls
    with [debug-statements](https://github.com/pre-commit/pre-commit-hooks#debug-statements)
  - Large files
    with [check-added-large-files](https://github.com/pre-commit/pre-commit-hooks#check-added-large-files)
  - Invalid Python files
    with [check-ast](https://github.com/pre-commit/pre-commit-hooks#check-ast)

CI/CD
-----
- Continuous integration
  with [`GitHub Actions`](https://github.com/features/actions)
- Automated Docker image builds and pushes
  to [Docker Hub](https://hub.docker.com/)
- Automated uploads
  to [PyPI](https://pypi.org/)
  and [TestPyPI](https://test.pypi.org/)[*](#conditional-rendering)
- Automated release notes
  with [`Release Drafter`](https://github.com/release-drafter/release-drafter)
- Automated dependency updates
  with [`Dependabot`](https://dependabot.com/)
  - Automated  [`Dependabot`](https://dependabot.com/) PR merging
    with the [Dependabot Auto Merge GitHub Action](https://github.com/ahmadnassri/action-dependabot-auto-merge)
- Project issue labels management
  with [`GitHub Labeler`](https://github.com/marketplace/actions/github-labeler)

Documentation
-------------
- Automated README table of contents generation
  with [markdown-toc](https://github.com/Lucas-C/pre-commit-hooks-nodejs)
- Architecture knowledge management
  with [Log4brains](https://github.com/thomvaill/log4brains)
    - See: [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
      for an overview on [Architecture Decision Records (ADR)](https://github.com/joelparkerhenderson/architecture_decision_record)
- Project documentation:
    - Documentation building
      with [Sphinx](https://www.sphinx-doc.org/en/master/index.html)
    - CLI reference
      with the [typer-cli documentation generator](https://typer.tiangolo.com/typer-cli/#generate-docs-with-typer-cli)
    - Automatic documentation from docstrings
      with [autodoc](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html)
      - Support for NumPy and Google style docstrings
        with [napoleon](https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html)
      - Python 3 type annotation extraction
        with [sphinx_autodoc_typehints](https://pypi.org/project/sphinx-autodoc-typehints/)
      - Docstring summaries
        with [autosummary](https://www.sphinx-doc.org/en/master/usage/extensions/autosummary.html)
    - Docstring coverage
      with [interrogate](https://interrogate.readthedocs.io/)
    - Documentation links to/from source code
      with [viewcode](https://www.sphinx-doc.org/en/master/usage/extensions/viewcode.html)
    - Publishing to [Confluence](https://www.atlassian.com/software/confluence)
      with [Atlassian Confluence Builder for Sphinx](https://sphinxcontrib-confluencebuilder.readthedocs.io/en/stable/)

<sup>
    <a name="conditional-rendering">
        * Conditionally rendered based on the configurations specified in the project setup phase to avoid tooling bloat
    </a>
    <br>
    <a name="jupyter-compatibility-via-nbqa">
        † Jupyter notebook compatibility via <a href="https://github.com/nbQA-dev/nbQA">nbQA</a>
    </a>
</sup>

Legal
=====

License
-------

cookiecutter-cruft-poetry-tox-pre-commit-ci-cd is licensed under the Apache License, Version 2.0. See
[LICENSE](./LICENSE) for the full license text.
