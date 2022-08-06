import React from 'react'
import {fireEvent, screen, render} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import axios from 'axios'
import TracksDropdown from '../../courseflow/js/components/Tracks'
import CourseFlow from '../../courseflow/js/CourseFlow'
import getApiResponse from '../__mocks__/axiosMock'
import { getTrackButton } from '../utils/getComponent'

jest.mock('axios')
const dropdownTestModel = (tracks) => () => {
  const testingTracks = []
  for (const [school, schoolTracks] of Object.entries(tracks)) {
    testingTracks.push({school: school, tracks: schoolTracks})
  }
  test('render', async () => {
    await act(async () => {
      render(<TracksDropdown tracks={testingTracks} handleTrackSelection={jest.fn()}/>)
    })
    if (testingTracks.length > 1) {
      expect(screen.findByText(/.*CS\sENG.*/)).toMatchSnapshot()
      expect(screen.findByText(/.*CS\sLSA.*/)).toMatchSnapshot()
    }
    else {
      expect(screen.findByText(new RegExp(`.*CS ${testingTracks[0].school.toUpperCase()}.*`)))
    }
  })
}

const dropdownOnClickTestModel = (tracks) => () => {

  const testingTracks = []
  for (const [school, schoolTracks] of Object.entries(tracks)) {
    testingTracks.push({school: school, tracks: schoolTracks})
  }

  beforeEach(async () => {
    axios.get.mockImplementation(url => url.includes('/api') ? 
      Promise.resolve({
        data: getApiResponse(url),
        status: 200,
      }) :
      Promise.reject(new Error(`Error: ${url} not valid`))
    )
    await act(async () => {
      render(<CourseFlow url='/api'/>)
    })
  })

  for (const schoolObj of testingTracks) {
    for (const track of schoolObj.tracks) {
      test(track.name, async () => {

        const trackButton = await getTrackButton(schoolObj.school, track.name, false)
        const noTrackSelectedHeader = await screen.findByText(/.*No\strack\sselected.*/)

        expect(trackButton).toMatchSnapshot()
        expect(noTrackSelectedHeader).toMatchSnapshot()

        await act( async () => {
          fireEvent.click(trackButton)
        })

        const currentTrackHeader = await screen.findByText(new RegExp(`.*Current\\strack:\\s${schoolObj.school.toUpperCase()}\\s${track.name}.*`))
        expect(currentTrackHeader).not.toBeNull()
        expect(currentTrackHeader).toMatchSnapshot()
      })
    }
  }
}

export {
  dropdownTestModel,
  dropdownOnClickTestModel,
};