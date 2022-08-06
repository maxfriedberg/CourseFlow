import flask

app = flask.Flask(__name__)

app.config.from_object('courseflow.config')

import courseflow.api
import courseflow.model