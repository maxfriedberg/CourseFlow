def query_course_details(db, department, courseNum):
  cursor = db.execute(
    "SELECT fullName, medianGrade, workload, description FROM courses "
    "WHERE department = ? AND courseNum = ?",
    (department, courseNum)
  )
  return cursor.fetchone()


def query_course_prereqs(db, department, courseNum):
  cursor = db.execute(
    "SELECT prereqInfo FROM coursePrereqs "
    "WHERE department = ? AND courseNum = ?",
    (department, courseNum)
  )
  return cursor.fetchall()


def query_course_titles_by_track(db, school, track):
  cursor = db.execute(
    "SELECT department, courseNum FROM trackCourses "
    "WHERE school = ? AND trackName = ? ",
    (school, track)
  )
  return cursor.fetchall()
