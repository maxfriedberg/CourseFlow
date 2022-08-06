import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import ExpandedCourse from '../../courseflow/js/modals/ExpandedCourse'
import { getExpandedCourse } from '../utils/getComponent'

const mockHide = jest.fn()

const expandedCourseTestModel = (courseObj) => () => {

  test('Show modal', async () => {
    await act(async () => {
      render(<ExpandedCourse
        course={courseObj}
        show={true}
        onHide={mockHide}
      />)
    })

    const expandedCourse = await getExpandedCourse(courseObj, false)
    expect(expandedCourse).not.toBeNull()
    expect(expandedCourse).toMatchSnapshot()
  })

  test('Hide modal', async () => {
    await act(async () => {
      render(<ExpandedCourse
        course={courseObj}
        show={false}
        onHide={mockHide}
      />)
    })

    const expandedCourse = getExpandedCourse(courseObj, true)
    expect(expandedCourse).toBeNull()
  })
}

export default expandedCourseTestModel