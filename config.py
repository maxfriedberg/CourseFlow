import pathlib

APPLICATION_ROOT = '/'
COURSEFLOW_API_ROOT = pathlib.Path(__file__).resolve().parent.parent
COURSE_PATH_JSONS = COURSEFLOW_API_ROOT / 'course_path_info'
