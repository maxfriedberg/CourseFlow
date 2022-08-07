import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import axios from 'axios'
import ExpandedCourse from '../../courseflow/js/modals/ExpandedCourse'
import { getExpandedCourse } from '../utils/getComponent'
import getApiResponse from '../__mocks__/axiosMock'

require("dotenv").config('../../../.env')
jest.mock('axios')
const mockHide = jest.fn()
const expandedCourseTestModel = (courseObj) => () => {

  beforeEach(async () => {
    axios.get.mockImplementation(url => {
      if (url.includes('/api')) {
        const response = getApiResponse(url)
        return response ?
          Promise.resolve({
            data: response,
            status: 200,
          }) :
          Promise.reject(new Error(`Error: Response from URL '${url}' not valid: ${response}`))
      }
      else {
        Promise.reject(new Error(`Error: URL '${url}' not valid`))
      }
    })

    await act(async () => {
      await render(<ExpandedCourse
        course={courseObj}
        show={true}
        onHide={mockHide}
      />)
    })
  })

  test('Show modal', async () => {

    const expandedCourse = await getExpandedCourse(courseObj, false)
    expect(expandedCourse).not.toBeNull()
    await waitFor(()=> expect(getExpandedCourse(courseObj, true)).toMatchSnapshot())
  })

  test('Hide modal', async () => {

    const expandedCourse = getExpandedCourse(courseObj, true)
    expect(expandedCourse).not.toBeNull()
    const closeButton = screen.queryByText(/.*Close.*/)
    expect(closeButton).not.toBeNull()
    await act(() => fireEvent.click(closeButton))
    expect(mockHide).toHaveBeenCalled()
  })
}

export default expandedCourseTestModel