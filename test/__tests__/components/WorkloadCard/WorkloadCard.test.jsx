import { workloadCardTestModel } from '../../../testModels'

describe('Testing Workload card', () => {
  describe('Easy', workloadCardTestModel('Easy'))
  describe('Moderate', workloadCardTestModel('Moderate'))
  describe('Heavy', workloadCardTestModel('Heavy'))
  describe('Extremely Heavy', workloadCardTestModel('Extremely Heavy'))
  describe('No Data (explicit)', workloadCardTestModel('No Data'))
  describe('No Data (implicit)', workloadCardTestModel(''))
})