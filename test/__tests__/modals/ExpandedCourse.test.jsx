import tracks from '../../__mocks__/mockData/tracks'
import { expandedCourseTestModel } from '../../testModels'

describe('Testing ExpandedCourse modal', () => {

  describe('ENG', () => {
    tracks.eng.ENG.forEach((track) => {
      describe(track.name, () => {
        track.course_details.forEach((courseObj) => {
          describe(courseObj.course, expandedCourseTestModel(courseObj))
        })
      })
    })
  })

  describe('LSA', () => {
    tracks.lsa.LSA.forEach((track) => {
      describe(track.name, () => {
        track.course_details.forEach((courseObj) => {
          describe(courseObj.course, expandedCourseTestModel(courseObj))
        })
      })
    })
  })

  describe('ENG and LSA', ()=> {
    for (const [school, schoolTracks] of Object.entries(tracks.all)) {
      schoolTracks.forEach((track) => {
        describe(track.name, () => {
          track.course_details.forEach((courseObj) => {
            describe(courseObj.course, expandedCourseTestModel(courseObj))
          })
        })
      })
    }
  })
})