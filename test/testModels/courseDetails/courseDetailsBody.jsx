import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { CourseDetails } from '../../../courseflow/js/components/CourseDetails'

const courseDetailsBodyTestModel = (course) => () => {
  beforeEach(async () => {
    await act(async () => {
      render(<CourseDetails.Body course={course} />)
    })
  })

  test('Description', async () => {
    const description = await screen.findByText(/.*Description.*/)
    expect(description).not.toBeNull()
    expect(description).toMatchSnapshot()
  })

  test('Prerequisites', async () => {
    const prereqs = await screen.findByText(/.*Prerequisites.*/)
    expect(prereqs).not.toBeNull()
    expect(prereqs).toMatchSnapshot()
  })

  test('Median Grade', async () => {
    const medianGrade = await screen.findByText(/.*Median\sGrade.*/)
    expect(medianGrade).not.toBeNull()
    expect(medianGrade).toMatchSnapshot()
  })

  test('Professor', async () => {
    const professor = await screen.findByText(/.*Professor.*/)
    expect(professor).not.toBeNull()
    expect(professor).toMatchSnapshot()
  })

  test('Links', async () => {
    const syllabusLink = await screen.findByText(/.*Syllabus.*/)
    expect(syllabusLink).not.toBeNull()
    expect(syllabusLink).toMatchSnapshot()

    const atlasLink = await screen.findByText(/.*Atlas.*/)
    expect(atlasLink).not.toBeNull()
    expect(atlasLink).toMatchSnapshot()

    const courseGuideLink = await screen.findByText(/.*Course\sGuide.*/)
    expect(courseGuideLink).not.toBeNull()
    expect(courseGuideLink).toMatchSnapshot()
  })
}

export default courseDetailsBodyTestModel