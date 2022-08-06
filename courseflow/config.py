import pathlib

APPLICATION_ROOT = '/'
COURSEFLOW_ROOT = pathlib.Path(__file__).resolve().parent.parent
PATH_TO_TRACKS = COURSEFLOW_ROOT / 'courseflow/static/track_info'

# Database file is var/courseflow.sqlite3
DATABASE_FILENAME = COURSEFLOW_ROOT / 'courseflow' / 'var' / 'courseflow.sqlite3'