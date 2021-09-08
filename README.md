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

**Example Project**: [https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance)

---

> :memo: **Note**  
> Originally inspired by [@cjolowicz's](https://github.com/cjolowicz) fantastic
> [`cookiecutter-hypermodern-python`](https://github.com/cjolowicz/cookiecutter-hypermodern-python)
> project and eponymous
> [Hypermodern Python](https://cjolowicz.github.io/posts/hypermodern-python-01-setup/)
> article series.

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

---

Table of Contents

<!-- toc -->

- [:tada: Creating a New Project](#tada-creating-a-new-project)
- [:link: Linking an Existing Project](#link-linking-an-existing-project)
- [:sparkles: Features](#sparkles-features)
  * [:rocket: Project Standardization and Automation](#rocket-project-standardization-and-automation)
    + [:hammer: Developer Workflow Automation](#hammer-developer-workflow-automation)
    + [:seedling: Conditionally Rendered Python Package or Project Boilerplate](#seedling-conditionally-rendered-python-package-or-project-boilerplate)
  * [:zap: Performance](#zap-performance)
    + [:package: C-Extension Compilation](#package-c-extension-compilation)
  * [:wrench: Maintainability](#wrench-maintainability)
    + [:label: Type Checking and Data Validation](#label-type-checking-and-data-validation)
    + [:white_check_mark: Testing/Coverage](#white_check_mark-testingcoverage)
    + [:rotating_light: Linting](#rotating_light-linting)
    + [:construction_worker: CI/CD](#construction_worker-cicd)
  * [:chart_with_downwards_trend: Observability](#chart_with_downwards_trend-observability)
    + [:loud_sound: Logging](#loud_sound-logging)
    + [:goal_net: Error Tracking](#goal_net-error-tracking)
  * [:lock: Security](#lock-security)
    + [:lock_with_ink_pen: Static Application Security Testing (SAST)](#lock_with_ink_pen-static-application-security-testing-sast)
  * [:clipboard: Accessibility](#clipboard-accessibility)
    + [:memo: Project Documentation](#memo-project-documentation)
    + [:ballot_box_with_check: Design Documentation and Production Deployment Checklists](#ballot_box_with_check-design-documentation-and-production-deployment-checklists)
    + [:card_file_box: Architecture Documentation](#card_file_box-architecture-documentation)
- [:judge: Legal](#judge-legal)
  * [:page_facing_up: License](#page_facing_up-license)

<!-- tocstop -->

:tada: Creating a New Project
=============================
Via [`cruft`](https://cruft.github.io/cruft/) (recommended):

```shell script
pip install --user cruft # Install `cruft` on your path for easy access
cruft create https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd
```

Via [`cookiecutter`](https://github.com/audreyr/cookiecutter):

```shell script
pip install --user cookiecutter # Install `cookiecutter` on your path for easy access
cookiecutter gh:TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd
```

Note: **_Cookiecutter_** uses `gh:` as short-hand for `https://github.com/`

:link: Linking an Existing Project
==================================
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

:sparkles: Features
===================

:rocket: Project Standardization and Automation
-----------------------------------------------

### :hammer: Developer Workflow Automation

- Python packaging and dependency management
  with [Poetry](https://python-poetry.org/)
- Project workflow orchestration
  with [Make](https://www.gnu.org/software/make/)
  as an [interface shim](https://en.wikipedia.org/wiki/Shim_(computing))
    - Self-documenting [Makefile](./{{cookiecutter.project_slug}}/Makefile); just type
      `make` on the command line to display auto-generated documentation on available
      targets
- Automated Cookiecutter template synchronization
  with [cruft](https://cruft.github.io/cruft/)
- Test automation
  with [Tox](https://tox.readthedocs.io/en/latest/)
- Code quality tooling automation and management
  with [pre-commit](https://pre-commit.com/)
- Continuous integration and deployment
  with [GitHub Actions](https://github.com/features/actions)

### :seedling: Conditionally Rendered Python Package or Project Boilerplate

- [Optional] Command-line interface boilerplate
  with [Typer](https://typer.tiangolo.com/)
- Project-specific [Docker](https://www.docker.com/) image
  Dockerfile[*](#conditional-rendering) with production dependencies for a
  completely reproducible execution environment
- [Optional] [Jupyter](https://jupyter.org/) support[*](#conditional-rendering)

:zap: Performance
-----------------

### :package: C-Extension Compilation

- Python module to C-extension compilation (enabled by standard Python type hints)
  with [Mypyc](https://mypyc.readthedocs.io/en/latest/index.html)
  - Automatically configured for Python package builds (see the template's
    [build.py](./{{cookiecutter.project_slug}}/build.py) file)

> :warning:️ Warning  
> Mypyc is currently alpha software. It’s only recommended for production use cases
> with careful testing, and if you are willing to contribute fixes or to work around
> issues you will encounter.

:wrench: Maintainability
------------------

### :label: Type Checking and Data Validation

- Static type-checking
  with [Mypy](http://mypy-lang.org)[†](#jupyter-compatibility-via-nbqa)
- Run-time type-checking
  with [Typeguard](https://github.com/agronholm/typeguard)
  - See the
    [Typeguard user guide](https://typeguard.readthedocs.io/en/latest/userguide.html?highlight=@typechecked#using-the-decorator)
    for usage overview
- [Design-by-contract](https://en.wikipedia.org/wiki/Design_by_contract) support
  (precondition, postcondition, and invariant enforcement)
  with [icontract](https://github.com/Parquery/icontract)
  - See [the test benchmarks](./tests/test_icontract_benchmark.py)
    for [example performance overhead measurements](https://teozosa.github.io/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/dev/py39-benchmark/)

### :white_check_mark: Testing/Coverage

- Testing
  with [`pytest`](https://docs.pytest.org/en/latest/)
- Doctests
  with [`xdoctest`](https://xdoctest.readthedocs.io)[†](#jupyter-compatibility-via-nbqa)
- [Performance testing](https://en.wikipedia.org/wiki/Software_performance_testing)
  with [`pytest-benchmark`](https://pytest-benchmark.readthedocs.io/en/stable/index.html)
- [Property-based testing](https://hypothesis.works/articles/what-is-property-based-testing/)
  with [Hypothesis](https://github.com/HypothesisWorks/hypothesis)
    - [Design-by-contract](#type-checking-and-data-validation) integration
      (i.e. to intelligently constrain the input space defined by the search strategy)
      via [icontract-hypothesis](https://github.com/mristin/icontract-hypothesis)
- [Mutation testing](https://en.wikipedia.org/wiki/Mutation_testing)
  with [mutmut](https://github.com/boxed/mutmut)

> :memo: **Note**  
>  For a good overview of how property-based testing and mutation testing
>  work together to improve the value and quality of your tests, see
>  [this stackoverflow post](https://stackoverflow.com/a/38704078/6470891)
>  and the
>  [follow-up by the `mutmut` author](https://stackoverflow.com/a/61849772/6470891).

- Code coverage
  with [Coverage.py](https://coverage.readthedocs.io/)
- Coverage reporting
  with [Codecov](https://codecov.io/)

### :rotating_light: Linting

- Code quality:
    - [FlakeHell](https://github.com/life4/flakehell)
    - [Pylint](https://www.pylint.org/)[†](#jupyter-compatibility-via-nbqa)
    - [pyupgrade](https://github.com/asottile/pyupgrade)[†](#jupyter-compatibility-via-nbqa)
- Code formatting:
    - [Black](https://github.com/psf/black)[†](#jupyter-compatibility-via-nbqa)
    - [isort](https://github.com/timothycrosley/isort)[†](#jupyter-compatibility-via-nbqa)
    - [shfmt](https://github.com/mvdan/sh)
    - [`pretty-format-json`](https://github.com/pre-commit/pre-commit-hooks#pretty-format-json)
    - (trim) [`trailing-whitespace`](https://github.com/pre-commit/pre-commit-hooks#trailing-whitespace)
    - [`end-of-file-fixer`](https://github.com/pre-commit/pre-commit-hooks#end-of-file-fixer)
- Unsanitary commits:
  - Secrets
    with [`detect-secrets`](https://github.com/Yelp/detect-secrets)
  - Debugger imports and py37+ `breakpoint()` calls
    with [`debug-statements`](https://github.com/pre-commit/pre-commit-hooks#debug-statements)
  - Large files
    with [`check-added-large-files`](https://github.com/pre-commit/pre-commit-hooks#check-added-large-files)
  - Invalid Python files
    with [`check-ast`](https://github.com/pre-commit/pre-commit-hooks#check-ast)

### :construction_worker: CI/CD

- Automated [Docker](https://www.docker.com/) image builds and pushes
  to [Docker Hub](https://hub.docker.com/)[‡](#repo-secret-required)
- Automated Python package uploads
  to [PyPI](https://pypi.org/)
  and [TestPyPI](https://test.pypi.org/)[*](#conditional-rendering)[‡](#repo-secret-required)
- Automated documentation building and hosting
  with [Read the Docs](https://readthedocs.org/)
- Automated release notes
  with [Release Drafter](https://github.com/release-drafter/release-drafter)
- Automated dependency updates
  with [Dependabot](https://dependabot.com/)
  - Automated [Dependabot](https://dependabot.com/) PR merging
    with the [Dependabot Auto Merge GitHub Action](https://github.com/ahmadnassri/action-dependabot-auto-merge)[‡](#repo-secret-required)
- Project issue labels management
  with [GitHub Labeler](https://github.com/marketplace/actions/github-labeler)
- Lightweight polyglot static analysis for code quality enforcement in addition to bug and security vulnerability identification
  with [Semgrep](https://semgrep.dev/)

:chart_with_downwards_trend: Observability
----------------

### :loud_sound: Logging

- [Structured logging](https://stripe.com/blog/canonical-log-lines)
  with [`structlog-sentry-logger`](https://github.com/TeoZosa/structlog-sentry-logger)
  (via [`structlog`](https://www.structlog.org/en/stable/))
  - Granular control flow context logging (via call stack introspection):
    - Namespaced module-specific loggers
    - Function name logging
  - Environment-dependent standard output stream log formatting:
    - Production: JSON logs
    - Development: Colorized human-readable logs, with JSON logs saved
      locally for retrospective analysis
  - [Optional] Exception logging to Sentry with
    [`structlog-sentry`](https://github.com/kiwicom/structlog-sentry)

### :goal_net: Error Tracking

- [Optional] Exception monitoring
  with [Sentry](https://sentry.io/welcome/)
  - see: the cookiecutter's [`.env`]({{cookiecutter.project_slug}}/.env) file for
    a detailed activation guide

:lock: Security
-----------

### :lock_with_ink_pen: Static Application Security Testing (SAST)

- Code vulnerabilities
  with [Bandit](https://github.com/PyCQA/bandit)[†](#jupyter-compatibility-via-nbqa)
- Python package dependencies vulnerabilities
  with [Safety](https://github.com/pyupio/safety)

:clipboard: Accessibility
----------------

### :memo: Project Documentation

- Documentation building
  with [Sphinx](https://www.sphinx-doc.org/en/master/index.html)
  - CLI reference
    with the [typer-cli documentation generator](https://typer.tiangolo.com/typer-cli/#generate-docs-with-typer-cli)
  - Rich automatic documentation from type annotations and docstrings (NumPy, Google,
    etc.)
    with [`sphinx-autoapi`](https://github.com/readthedocs/sphinx-autoapi)
  - Automated emoji shortcode conversion[§](#read-the-docs-compatibility)
- Docstring coverage
  with [`interrogate`](https://interrogate.readthedocs.io/)
- Automated README table of contents generation
  with [`markdown-toc`](https://github.com/Lucas-C/pre-commit-hooks-nodejs)
- Publishing to [Confluence](https://www.atlassian.com/software/confluence)
  with [Atlassian Confluence Builder for Sphinx](https://sphinxcontrib-confluencebuilder.readthedocs.io/en/stable/)

### :ballot_box_with_check: Design Documentation and Production Deployment Checklists

- Production service design documentation and deployment checklist templates
  with [Mercari's `production-readiness-checklist`](https://github.com/mercari/production-readiness-checklist)

### :card_file_box: Architecture Documentation

- [Optional] Architecture knowledge management
  with [Log4brains](https://github.com/thomvaill/log4brains) to systematically
  facilitate and record the planning process and context for each of a software system's
  architectural changes that occur over time and their consequences.
  - See: [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
    for an overview on [Architecture Decision Records (ADR)](https://github.com/joelparkerhenderson/architecture_decision_record)

<br>
<sup>
    <a name="conditional-rendering">
        * Conditionally rendered based on the configurations specified in the project setup phase to avoid tooling bloat
    </a>
    <br>
    <a name="jupyter-compatibility-via-nbqa">
        † Jupyter notebook compatibility via <a href="https://github.com/nbQA-dev/nbQA">nbQA</a>
    </a>
    <br>
    <a name="repo-secret-required">
        ‡ Requires definitions of one or more of the below repository secrets:

    AUTO_MERGE_DEPENDABOT_TOKEN
    DOCKERHUB_TOKEN
    DOCKERHUB_USERNAME
    PYPI_TOKEN
    TEST_PYPI_TOKEN
   </a>
    <a name="read-the-docs-compatibility">
        § Custom setup steps in Sphinx configuration file for Read the Docs compatibility
      (see: <a href="https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/blob/master/{{cookiecutter.project_slug}}/docs/source/conf.py#L117-L139">
            conf.py:117-139
            </a>
      ) </a>
</sup>

:judge: Legal
=============

:page_facing_up: License
------------------------

cookiecutter-cruft-poetry-tox-pre-commit-ci-cd is licensed under the Apache License, Version 2.0. See
[LICENSE](./LICENSE) for the full license text.
