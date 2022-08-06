import courseflow
from courseflow.api.clients.queries import *


def get_courses_by_track(school, track):
  db = courseflow.model.get_db()

  trackCourseTitles = query_course_titles_by_track(db, school, track)
  trackCourses = [
    build_course_mapping(
      db,
      courseTitle.get('department', ''),
      courseTitle.get('courseNum', '')
    ) for courseTitle in trackCourseTitles
  ]

  return {
    'school': school,
    'track': track,
    'requirements': trackCourses
  }


def build_course_mapping(db, department, courseNum):

  details = query_course_details(db, department, courseNum)
  prereqs = query_course_prereqs(db, department, courseNum)

  return {
    'course': f'{department.upper()} {courseNum}',
    'median_grade': details.get('medianGrade', ''),
    'workload': details.get('workload', ''),
    'name': details.get('fullName', ''),
    'description': details.get('description', ''),
    'prereqs': [prereq.get('prereqInfo', None) for prereq in prereqs],
  }
