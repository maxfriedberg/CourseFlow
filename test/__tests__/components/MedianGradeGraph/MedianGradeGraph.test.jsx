import tracks from '../../../__mocks__/mockData/tracks'
import { medianGradeGraphTestModel } from '../../../testModels'

describe('Testing MedianGradeGraph component', () => {
  for (const [school, schoolTracks] of Object.entries(tracks.all)) {
    schoolTracks.forEach((track) => {
      track.course_details.forEach((courseObj) => {
        describe(`${school} ${track.name} ${courseObj.course}`, medianGradeGraphTestModel(courseObj.course))
      })
    })
  }
})