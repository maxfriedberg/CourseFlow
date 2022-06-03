import flask
import routes
import courseflow
import json

@routes.app.route('/eng/hardware')
def get_eng_hardware():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/hardware-schema.json/') as hardware_json:
        hardware_info = json.load(hardware_json)
    return flask.render_template("lsa-ai.html", **hardware_info)

@routes.app.route('/eng/infrastructure')
def get_eng_infrastructure():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/infrastructure-schema.json/') as infrastructure_json:
        infrastructure_info = json.load(infrastructure_json)
    return flask.render_template("lsa-ai.html", **infrastructure_info)

@routes.app.route('/eng/intelligentsystems')
def get_eng_intelligent_systems():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/intelligentsystems-schema.json/') as intelligent_sys_json:
        intelligent_sys_info = json.load(intelligent_sys_json)
    return flask.render_template("lsa-ai.html", **intelligent_sys_info)

@routes.app.route('/eng/software')
def get_eng_software():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/software-schema.json/') as software_json:
        software_info = json.load(software_json)
    return flask.render_template("lsa-ai.html", **software_info)

@routes.app.route('/eng/theory')
def get_eng_theory():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/theory-schema.json/') as theory_json:
        theory_info = json.load(theory_json)
    return flask.render_template("lsa-ai.html", **theory_info)

@routes.app.route('/eng/webtech')
def get_eng_webtech():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/webtech-schema.json/') as web_tech_json:
        web_tech_info = json.load(web_tech_json)
    return flask.render_template("lsa-ai.html", **web_tech_info)
