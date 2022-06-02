import flask

app = flask.Flask(__name__)

# Read settings from config module (insta485/config.py)
app.config.from_object('courseflow.config')

import courseflow.routes

