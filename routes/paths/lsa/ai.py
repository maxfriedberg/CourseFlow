import flask
import routes
import courseflow
import json

@routes.app.route('/artificialintelligence')
def show_index():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/ai-schema.json') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa-ai.html", **ai_info)
