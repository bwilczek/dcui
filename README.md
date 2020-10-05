# WORK IN PROGRESS

# Web UI for docker-compose

```
# clone this repo
FILE_NAME=docker-compose-tests.yml                  # default is docker-compose.yml
STACK_DIR=/path/to/directory/where/$FILE_NAME/lives # default is pwd, will work only when dcui is avaialble as a global binary
./bin/dcui $STACK_DIR $FILE_NAME
```

The UI is present at http://localhost:4567

# Roadmap

 * [x] start individual containers
 * [x] stop individual containers
 * [ ] stop/start containers in batches
 * [ ] containers groups (e.g. local development, local cucumber)
