import flask
import courseflow
from courseflow.api.clients import *



@courseflow.app.route('/api')
def handle_api_query():

    return flask.jsonify(**get_tracks_by_school())

@courseflow.app.route('/api/tracks/<school>')
def handle_track_query(school):
    track = flask.request.args.get('track', None)

    return flask.jsonify(**get_courses_by_track(school, track))

@courseflow.app.route('/api/courses')
def handle_course_query():
    department = flask.request.args.get('department', None)
    courseNum = flask.request.args.get('courseNum', None)

    return flask.jsonify(**get_course_grade_info(department, courseNum))