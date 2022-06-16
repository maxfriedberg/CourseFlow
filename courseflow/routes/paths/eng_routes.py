import flask
import courseflow
import json

@courseflow.app.route('/eng/hardware')
def get_eng_hardware():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/eng-comhardware-schema.json') as hardware_json:
        hardware_info = json.load(hardware_json)
    return flask.render_template("courses.html", **hardware_info)

@courseflow.app.route('/eng/infrastructure')
def get_eng_infrastructure():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/eng-compinfrast-schema.json') as infrastructure_json:
        infrastructure_info = json.load(infrastructure_json)
    return flask.render_template("courses.html", **infrastructure_info)

@courseflow.app.route('/eng/intelligentsystems')
def get_eng_intelligent_systems():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/eng-intellsys-schema.json') as intelligent_sys_json:
        intelligent_sys_info = json.load(intelligent_sys_json)
    return flask.render_template("courses.html", **intelligent_sys_info)

@courseflow.app.route('/eng/software')
def get_eng_software():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/eng-software-dev-schema.json') as software_json:
        software_info = json.load(software_json)
    return flask.render_template("courses.html", **software_info)

@courseflow.app.route('/eng/theory')
def get_eng_theory():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/eng-computation-schema.json') as theory_json:
        theory_info = json.load(theory_json)
    return flask.render_template("courses.html", **theory_info)

@courseflow.app.route('/eng/webtech')
def get_eng_webtech():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/eng-webtech-schema.json') as web_tech_json:
        web_tech_info = json.load(web_tech_json)
    return flask.render_template("courses.html", **web_tech_info)
