#!/bin/bash
set -Eeuo pipefail

export FLASK_ENV=development
export FLASK_APP=courseflow
flask run --host 0.0.0.0 --port 8000