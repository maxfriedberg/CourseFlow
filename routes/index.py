import flask
import routes


@routes.app.route('/')
def show_index():
    paths = {
        "eng_paths": [
            "Computer Hardware",
            "Computer Infrastructure",
            "Intelligent Systems",
            "Software Development",
            "Theory of Computation",
            "Web Technology and Applications"
        ],
        "lsa_paths": [
            "Artificial Intelligence",
            "Bioinformatics",
            "Data and Information",
            "Economics and Computation",
            "Robotics and Vision",
            "Security",
            "Software Development",
            "Software Systems",
            "Theory of Computation"
        ]
    }
    return flask.render_template("index.html", **paths)
