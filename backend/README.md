# Preqin Take Home Exercise API

This is the API for the take home exercise.

## Instructions

1. Install Docker on your machine if not available
2. Build api container with `docker build -t preqin-api .`
3. Run api container with `docker run --publish 8000:8000 preqin-api`
4. Api points can be found at `127.0.0.1:8000`
   - Docs for the api can be found at `127.0.0.1:8000/docs`

## Local Development with hot reload

If the need arises to develop the API locally, run the following command to get it working with hot reload functionality:

```bash
python3 -m venv .venv
pip3 install -r requirements.txt
python3 main.py
```

To get this working with breakpoints, wrap this in a launch.json file:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python Debugger: FastAPI",
      "type": "debugpy",
      "request": "launch",
      "module": "uvicorn",
      "pathMappings": [
        {
          "localRoot": "${workspaceFolder}/backend",
          "remoteRoot": "./backend/"
        }
      ],
      "args": ["backend.main:app", "--reload"],
      "jinja": true,
      "env": {
        "PYTHONPATH": "${workspaceFolder}/backend"
      }
    }
  ]
}
```
