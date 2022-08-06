import tracks from '../../../__mocks__/mockData/tracks'
import { courseTestModel } from '../../../testModels'

describe('Testing Course component', () => {

  describe('ENG', () => {
    tracks.eng.ENG.forEach((track) => {
      describe(track.name, () => {
        track.course_details.forEach((courseObj) => {
          describe(courseObj.course, courseTestModel(courseObj))
        })
      })
    })
  })

  describe('LSA', () => {
    tracks.lsa.LSA.forEach((track) => {
      describe(track.name, () => {
        track.course_details.forEach((courseObj) => {
          describe(courseObj.course, courseTestModel(courseObj))
        })
      })
    })
  })

  describe('ENG and LSA', ()=> {
    for (const [school, schoolTracks] of Object.entries(tracks.all)) {
      schoolTracks.forEach((track) => {
        describe(track.name, () => {
          track.course_details.forEach((courseObj) => {
            describe(courseObj.course, courseTestModel(courseObj))
          })
        })
      })
    }
  })
})