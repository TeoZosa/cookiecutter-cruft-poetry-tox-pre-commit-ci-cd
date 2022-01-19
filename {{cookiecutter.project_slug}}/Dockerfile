# syntax=docker/dockerfile:experimental

FROM python:3.11.0a4-slim@sha256:a44b9b4c2912891eeec235f871f0c8a8b70334b233263e108f9e9b5a002e1032

LABEL maintainer="{{cookiecutter.author}} <{{cookiecutter.email}}>"
ENV LANG C.UTF-8

SHELL ["/bin/bash",  "-o", "pipefail", "-c"]

# Install common functionality for downstream layers/user env
# hadolint ignore=DL3008
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        git \
        make && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Setup Poetry for Python package and dependency management
ENV POETRY_HOME=/opt/poetry \
    POETRY_VIRTUALENVS_CREATE=false
ENV PATH="${POETRY_HOME}/bin:${PATH}"
# Install `poetry` via `curl` and system `python`
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py | python && \
    poetry --version && \
    poetry config --list
{% if cookiecutter.jupyter_notebook_project == 'yes' %}
# Add Tini for Jupyter to prevent kernel crashes
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/bin/tini
RUN chmod +x /usr/bin/tini
{%- endif %}

# Install project dependencies
COPY pyproject.toml poetry.lock /app/
WORKDIR /app/
RUN poetry install \
        --no-dev \
        --no-interaction \
        --no-root

# Note: delete the below if you do NOT want application files distributed with
# your container image
COPY {{cookiecutter.package_name}} /app/{{cookiecutter.package_name}}

{% if cookiecutter.jupyter_notebook_project == 'yes' %}
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["jupyter", "notebook","--ip='*'", "--port=8888", "--no-browser", "--allow-root"]
{% else %}
CMD ["/app/{{cookiecutter.package_name}}/entrypoint"]
{% endif %}
