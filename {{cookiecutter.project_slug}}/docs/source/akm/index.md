<!-- This file is the homepage of your Log4brains knowledge base. You are free to edit it as you want -->

# Architecture Knowledge Base

Welcome :wave: to the architecture knowledge base of
{{cookiecutter.project_slug}}.
Here you will find the Architecture Decision Records (ADRs) of the project.

## Definition and purpose

> An **Architecture Decision (AD)** is a software design choice that addresses an
> architecturally significant functional or non-functional requirement.

> An **Architecture Decision Record (ADR)** captures a single AD
> along with its context and consequence.

> An **Architecture Decision Log (ADL)** is the collection of ADRs
> created and maintained for a project or organization.

An ADR is immutable: only its status can change
(i.e., become deprecated or superseded).
That way, you can become familiar with the whole project history
just by reading its decision log in chronological order.

Maintaining this documentation aims at:

- :rocket: Improving and accelerating the onboarding of a new team member
- :telescope: Avoiding blind acceptance or reversal of a past decision
  - See [Michael Nygard's famous article on ADRs](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html)
- :handshake: Formalizing the decision process of the team

## Usage

The typical workflow of an ADR:

![ADR workflow](./l4b-static/adr-workflow.png)

The decision process is entirely collaborative and backed by pull requests.

> :information_source: **Technical Details**  
>  The architecture knowledge base is updated automatically
>  on each push to the project's `master` branch;
>  the developers manage this documentation directly
>  with in-project markdown files for seamless integration,
>  reducing documentation and source code drift
>  throughout the software development lifecycle
>  and downstream CI/CD pipelines.

> :fire: **Tip**  
>  You can browse the ADRs via the left menu or the search bar of the ADL.

## More information

- [Log4brains documentation](https://github.com/thomvaill/log4brains/tree/master#readme)
- [What is an ADR and why should you use them](https://github.com/thomvaill/log4brains/tree/master#-what-is-an-adr-and-why-should-you-use-them)
- [ADR GitHub organization](https://adr.github.io/)
