import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import MedianGradeGraph from '../../courseflow/js/components/MedianGradeGraph'
import { getMedianGradeGraph } from '../utils/getComponent'
import getApiResponse from '../__mocks__/axiosMock'

const medianGradeGraphTestModel = (course) => () => {
  test('render', async () => {
    const [department, courseNum] = course.split(' ')
    const grades = getApiResponse(`/api/courses?department=${department}&courseNum=${courseNum}`)

    await act(async () => {
      render(<MedianGradeGraph grades={grades} course={course}/>)
    })

    const graph = await getMedianGradeGraph(course)
    expect(graph).not.toBeNull()
    expect(graph).toMatchSnapshot()
  })
}

export default medianGradeGraphTestModel