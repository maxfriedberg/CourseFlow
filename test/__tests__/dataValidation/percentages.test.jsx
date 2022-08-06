import { gradeDistributionData } from '../../../courseflow/static/course_info';

function countPercentages(data) {
  let totalPercentages = 0
  let lessThanOneCount = 0
  for (const grade of data) {
    if (grade.percentage.includes('<')) {
      lessThanOneCount++
    }
    else {
      totalPercentages += parseInt(grade.percentage.replace(' ', ''))
    }
  }
  return [totalPercentages, lessThanOneCount]
}

describe("Testing percentage totals", () => {
  for (const [department, courses] of Object.entries(gradeDistributionData)) {

    describe(department.toUpperCase(), () => {
      for (const [courseNum, data] of Object.entries(courses)) {
        const [totalP, lt1Count] = countPercentages(data)

        test(courseNum, () => {
          expect(totalP).toBeLessThanOrEqual(100)
          expect(totalP + lt1Count).toBeGreaterThanOrEqual(96)
          expect(totalP + lt1Count).toBeLessThanOrEqual(104)
          if (totalP === 100) {
            expect(lt1Count).toBe(0)
          }
          expect(`${totalP} ${lt1Count}`).toMatchSnapshot()
        })
      }
    })
  }
})
