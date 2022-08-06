import { gradeDistributionData } from "../../../../courseflow/static/course_info";
import { medianGradeGraphTestModel } from '../../../testModels'

describe('Testing MedianGradeGraph component', () => {
  for(const [department, courseData] of Object.entries(gradeDistributionData)) {
    for (const [courseNum, data] of Object.entries(courseData)) {
      const courseName = `${department} ${courseNum}`
      describe(courseName, medianGradeGraphTestModel(courseName, data))
    }
  }
})