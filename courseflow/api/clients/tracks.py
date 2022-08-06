import courseflow
from courseflow.api.clients.queries import *


def get_tracks_by_school():
  db = courseflow.model.get_db()

  schoolTracks = {}
  tracks = query_all_tracks(db)

  for track in tracks:

    school = track.get('school', '')
    if school not in schoolTracks.keys():
      schoolTracks[school] = []

    schoolTracks[school].append(
      build_track_mapping(
        db,
        school,
        track.get('trackName', ''),
        track.get('description', None),
        track.get('note', None)
      )
    )

  return schoolTracks


def build_track_mapping(db, school, track, description, note):
  prereqs = query_track_prereqs(db, school, track)

  return {
    "name": track,
    "info": {
      "description": description,
      "note": note,
      "requirements": [prereq.get('prereqInfo', '') for prereq in prereqs]
    }
  }
