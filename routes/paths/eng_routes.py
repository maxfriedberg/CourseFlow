import flask
import routes
import courseflow
import json

@routes.app.route('/eng/hardware')
def get_eng_hardware():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/hardware-schema.json/') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa-ai.html", **ai_info)

@routes.app.route('/eng/infrastructure')
def get_eng_infrastructure():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/infrastructure-schema.json/') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa-ai.html", **ai_info)

@routes.app.route('/eng/intelligentsystems')
def get_eng_intelligent_systems():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/intelligentsystems-schema.json/') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa-ai.html", **ai_info)

@routes.app.route('/eng/software')
def get_eng_software():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/software-schema.json/') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa-ai.html", **ai_info)

@routes.app.route('/eng/theory')
def get_eng_theory():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/theory-schema.json/') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa-ai.html", **ai_info)

@routes.app.route('/eng/webtech')
def get_eng_webtech():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/webtech-schema.json/') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa-ai.html", **ai_info)
