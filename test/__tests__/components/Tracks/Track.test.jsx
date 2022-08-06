import tracks from '../../../__mocks__/mockData/tracks'
import { trackTestModel } from '../../../testModels'

describe('Testing Track component', () => {
  describe('LSA track hover', () => {
    for (const track of tracks.lsa['LSA']) {
      describe(track.name, trackTestModel('LSA', track))
    }
  })

  describe('ENG track hover', () => {
    for (const track of tracks.eng['ENG']) {
      describe(track.name, trackTestModel('ENG', track))
    }
  })

  describe('All tracks hover', () => {
    for (const [school, schoolTracks] of Object.entries(tracks.all)) {
      for (const track of schoolTracks) {
        describe(track.name, trackTestModel(school, track))
      }
    }
  })
})