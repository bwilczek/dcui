# Web UI for docker-compose

## Overview

A simple `sinatra` app that helps selectively start/stop containers from the given `docker-compose` stack.

The main use case for the app is grouping of dockerized services. Consider `docker-compose.yml` with 20 containers (SOA!).
Developers working on different parts of the whole system are going to need different subsets of the whole stack.

Such subsets can be configured using `.dcui.yml` file, saved in the same directory where `docker-compose` file lives.

Example `.dcui.yml` for `docker-compose.yml` containing services: `mysql`, `redis`, `elasticsearch_dev`, `elasticsearch_test`, `kafka`, `traefik_dev`, `traefik_test`:

```
system-testing:
  - mysql
  - redis
  - elasticsearch_test
  - traefik_test
development:
  - mysql
  - redis
  - elasticsearch_dev
  - kafka
  - traefik_dev
```

See the `example` directory

## Installation

```
gem install dcui
```

## Execution

Runtime configuration via env vars:

* `DCUI_APP_DIR` - path to directory with `docker-compose.yml` and `.dcui.yml`. Default: `pwd`
* `DCUI_FILE_NAME` - name of the `docker-compose` file. Default: `docker-compose.yml`
* `DCUI_PORT` - port on which the UI runs. Default: 4567

Start with command:

```
dcui
```

Sinatra runs in foreground. The UI is now present at http://localhost:4567

## Development roadmap

 * [x] start individual containers
 * [x] stop individual containers
 * [x] stop/start containers in batches
 * [x] containers groups (e.g. local development, local cucumber)
 * [ ] make it look not so ugly
 * [ ] considering adding inheritance to `.dcui.yml` sections
