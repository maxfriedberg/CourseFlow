import flask
import courseflow

@courseflow.app.route('/')
def show_index():
    return flask.render_template("index.html")
