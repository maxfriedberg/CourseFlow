import tracks from '../../../__mocks__/mockData/tracks'
import { dropdownTestModel, dropdownOnClickTestModel } from '../../../testModels'

describe('Testing TracksDropdown component for expected data', () => {
  describe('ENG', dropdownTestModel(tracks.eng))
  describe('LSA', dropdownTestModel(tracks.lsa))
  describe('ENG and LSA', dropdownOnClickTestModel(tracks.all))
})

describe('Testing TracksDropdown onClick', () => {
  describe('ENG', dropdownOnClickTestModel(tracks.eng))
  describe('LSA', dropdownOnClickTestModel(tracks.lsa))
  describe('ENG and LSA', dropdownOnClickTestModel(tracks.all))
})