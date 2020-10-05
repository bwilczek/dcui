# WORK IN PROGRESS

# Web UI for docker-compose

```
# clone this repo
DCUI_APP_DIR=~/work/toptal/platform DCUI_FILE_NAME=docker-compose-tests.yml ./bin/dcui
```

File path to store environments (subsets of services):
```
$DCUI_APP_DIR/.dcui.yml
```
see example content in this repo

The UI is present at http://localhost:4567

# Roadmap

 * [x] start individual containers
 * [x] stop individual containers
 * [ ] stop/start containers in batches
 * [ ] containers groups (e.g. local development, local cucumber)
