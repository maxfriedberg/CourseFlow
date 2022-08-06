import tracks from '../../../../__mocks__/mockData/tracks'
import { courseDetailsTestModel } from '../../../../testModels'

describe('Testing CourseDetails component', () => {
  describe('ENG', () => {
    tracks.eng.ENG.forEach((track) => {
      describe(track.name, () => {
        track.course_details.forEach((course) => {
          describe(course.course, courseDetailsTestModel(course))
        })
      })
    })
  })

  describe('LSA', ()=> {
    tracks.lsa.LSA.forEach((track) => {
      describe(track.name, () => {
        track.course_details.forEach((course) => {
          describe(course.course, courseDetailsTestModel(course))
        })
      })
    })
  })

  describe('ENG and LSA', ()=> {
    for (const [school, schoolTracks] of Object.entries(tracks.all)) {
      schoolTracks.forEach((track) => {
        describe(track.name, () => {
          track.course_details.forEach((course) => {
            describe(course.course, courseDetailsTestModel(course))
          })
        })
      })
    }
  })
})