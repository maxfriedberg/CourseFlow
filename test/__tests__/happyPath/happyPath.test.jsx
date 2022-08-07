import React from 'react'
import {render, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import axios from 'axios'
import getApiResponse from '../../__mocks__/axiosMock'
import CourseFlow from '../../../courseflow/js/CourseFlow'

require("dotenv").config('../../../.env')
jest.mock('axios')

describe('Testing on load happy path', () => {

  test('Testing track overview retrieval', async () => {
    axios.get.mockImplementation((url) => {
      if (url === '/api') {
        return Promise.resolve({
          data: getApiResponse(url),
          status: 200,
        })
      }
      return Promise.reject(new Error(`Error: URL '${url}' not valid`))
    })

    await act(async () => {
      render(<CourseFlow />);
    })
    expect(screen.getAllByText(/CS/)).toMatchSnapshot()
    expect(screen.getAllByText(/CS/)).not.toBeNull()
  })
})