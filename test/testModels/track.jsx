import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, waitFor } from '@testing-library/react'
import { getTrackButton, getTrackPopover } from '../utils/getComponent'
import Track from '../../courseflow/js/components/Tracks/Track'

const mockClick = jest.fn()

const trackHoverTestModel = (school, track) => () => {
  beforeAll(() => {
    jest.useFakeTimers()
    render(<Track school={school} track={track} handleTrackSelection={mockClick}/>)
  })

  afterAll(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  test('popover', async () => {
    const hoverButton = await getTrackButton(school, track.name, false)
    expect(getTrackPopover(school, track.name, true)).toBeNull()
    expect(hoverButton).toMatchSnapshot()

    userEvent.hover(hoverButton)
    jest.advanceTimersByTime(600)
    const popover = await getTrackPopover(school, track.name, false)
    const button = await getTrackButton(school, track.name, false)
    expect(popover).not.toBeNull()
    expect(popover).toMatchSnapshot()
    expect(button).toMatchSnapshot()

    userEvent.unhover(hoverButton)
    jest.advanceTimersByTime(300)
    await waitFor(() => expect(getTrackPopover(school, track.name, true)).toBeNull())

    const trackButton = await getTrackButton(school, track.name, false)
    expect(trackButton).not.toBeNull()
    expect(trackButton).toMatchSnapshot()
  })
}



export default trackHoverTestModel;