# preqin-tech-test

## Local development

First, configure auto linters by installing the required tools:

```bash
pip3 install -r requirements.txt
pre-commit install
```

Once this is done, the individual readmes in each folders have the required instructions, and running each package individually with hot reload will likely make for easier local development.

However, if there is a need to run the entire stack, then that can be done with the following:

```bash
docker compose build
docker compose up
```
