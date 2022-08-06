import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { CourseDetails } from '../../../courseflow/js/components/CourseDetails'

const courseDetailsFooterTestModel = () => () => {
  const mockHide = jest.fn()

  beforeEach(async () => {
    await act(async () => {
      render(<CourseDetails.Footer onHide={mockHide} />)
    })
  })

  test('Disclaimer', async () => {
    const disclaimer = await screen.findByText(/.*All\scourse\sdata.*/)
    expect(disclaimer).not.toBeNull()
    expect(disclaimer).toMatchSnapshot()
  })

  test('Close', async () => {
    const closeButton = await screen.findByText(/.*Close.*/)
    expect(closeButton).not.toBeNull()
    await act(() => fireEvent.click(closeButton))
    expect(mockHide).toHaveBeenCalledTimes(1)
    expect(closeButton).toMatchSnapshot()
  })
}

export default courseDetailsFooterTestModel