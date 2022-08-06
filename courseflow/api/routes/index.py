import flask
import courseflow
from courseflow.api.clients import *


@courseflow.app.route('/api')
def handle_api_query():
    school = flask.request.args.get('school', None)
    track = flask.request.args.get('track', None)

    if school and track:
        return flask.jsonify(**get_courses_by_track(school, track))
    return flask.jsonify(**get_tracks_by_school())