import tracks from './mockData/tracks'

const getTrackFromQuery = (school, track) => {
  for (const [schoolName, tracks] of Object.entries(tracks.all)) {
    if (schoolName.toLowerCase() === school.toLowerCase()) {
      for (const trackObj of tracks) {
        if (trackObj.name.toLowerCase() === track.toLowerCase()) {
          return track
        }
      }
    }
  }
}

export default (url) => {
  let school, track
  if (url.includes('?')) {
    school = url.split('?')[1].includes('school') ?
      url.split('?')[1].split('school=')[1].split('&')[0] :
      null
    track = url.split('?')[1].includes('track') ?
      url.split('?')[1].split('track=')[1].split('&')[0] :
      null
  }

  return !school || !track ?
    tracks.all : getTrackFromQuery(school, track)
}