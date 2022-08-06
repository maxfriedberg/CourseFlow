import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Course from '../../courseflow/js/components/Courses/Course'
import { getCourse } from '../utils/getComponent'

const courseTestModel = (courseObj) => () => {
  test('render', async () => {

    await act(async () => {
      render(<Course
        course={courseObj.course}
        medianGrade={courseObj.median_grade}
        workload={courseObj.workload}
        name={courseObj.name}
      />)
    })

    const course = await getCourse(courseObj)
    expect(course).not.toBeNull()
    expect(course).toMatchSnapshot()
  })
}

export default courseTestModel