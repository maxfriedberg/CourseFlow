def query_all_tracks(db):
  cursor = db.execute(
    "SELECT school, trackName, description, note "
    "FROM tracks "
    "ORDER BY school"
  )
  return cursor.fetchall()


def query_track_prereqs(db, school, track):
  cursor = db.execute(
    "SELECT prereqInfo "
    "FROM trackPrereqs "
    "WHERE school = ? AND trackName = ?",
    (school, track)
  )
  return cursor.fetchall()
