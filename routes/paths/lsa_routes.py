import flask
import courseflow
import json

@courseflow.app.route('/lsa/artificialintelligence')
def get_lsa_ai():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/ai-schema.json') as ai_json:
        ai_info = json.load(ai_json)
    return flask.render_template("lsa.html", **ai_info)


@courseflow.app.route('/lsa/bioinformatics')
def get_lsa_bio():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/bio-schema.json') as bio_json:
        bio_info = json.load(bio_json)
    return flask.render_template("lsa.html", **bio_info)

@courseflow.app.route('/lsa/dataandinformation')
def get_lsa_data_and_info():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/datainf-schema.json') as data_path_json:
        data_path_info = json.load(data_path_json)
    return flask.render_template("lsa.html", **data_path_info)

@courseflow.app.route('/lsa/economicsandcomputation')
def get_lsa_econ():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/econ-schema.json') as econ_json:
        econ_info = json.load(econ_json)
    return flask.render_template("lsa.html", **econ_info)

@courseflow.app.route('/lsa/roboticsandvision')
def get_lsa_robotics():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/robotics-schema.json') as robotics_json:
        robotics_info = json.load(robotics_json)
    return flask.render_template("lsa.html", **robotics_info)

@courseflow.app.route('/lsa/security')
def get_lsa_security():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/security-schema.json') as security_json:
        security_info = json.load(security_json)
    return flask.render_template("lsa.html", **security_info)

@courseflow.app.route('/lsa/softwaredevelopment')
def get_lsa_software_development():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/software-dev-schema.json') as software_dev_json:
        software_dev_info = json.load(software_dev_json)
    return flask.render_template("lsa.html", **software_dev_info)

@courseflow.app.route('/lsa/softwaresystems')
def get_lsa_software_systems():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/software-systems-schema.json') as software_systems_json:
        software_systems_info = json.load(software_systems_json)
    return flask.render_template("lsa.html", **software_systems_info)

@courseflow.app.route('/lsa/theoryofcomputation')
def get_lsa_theory():
    path_to_jsons = courseflow.app.config['COURSE_PATH_JSONS']
    with open(f'/{path_to_jsons}/computation-schema.json') as theory_json:
        theory_info = json.load(theory_json)
    return flask.render_template("lsa.html", **theory_info)
