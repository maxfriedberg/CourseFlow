import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { CourseDetails } from '../../../courseflow/js/components/CourseDetails'

const courseDetailsHeaderTestModel = (course) => () => {
  test('Workload', async () => {

    await act(async () => {
      render(<CourseDetails.Header course={course} />)
    })

    const workload = await screen.findByText(/.*Workload.*/)
    expect(workload).not.toBeNull()
    expect(workload).toMatchSnapshot()
  })
}

export default courseDetailsHeaderTestModel