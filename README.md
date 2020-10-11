# WORK IN PROGRESS

# Web UI for docker-compose

Configuration via env vars:
```
DCUI_APP_DIR
DCUI_FILE_NAME
DCUI_PORT
```

```
# clone this repo
DCUI_APP_DIR=./example  ./bin/dcui
```

File to store environments (subsets of services):
```
.dcui.yml
```
see example content in `example` dir.

The UI is present at http://localhost:4567

# Roadmap

 * [x] start individual containers
 * [x] stop individual containers
 * [ ] stop/start containers in batches
 * [ ] containers groups (e.g. local development, local cucumber)
