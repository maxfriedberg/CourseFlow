import { screen } from "@testing-library/dom"

const getTrackButton = (school, trackName, sync) => {
  const trackRe = new RegExp(`.*${trackName}.*`)

  const syncGet = () => screen.queryAllByText(trackRe).length > 1 ?
    screen.queryAllByText(trackRe)[school.toLowerCase() === 'eng' ? 0 : 1] :
    screen.queryByText(trackRe)
  const asyncGet = async () => {
    const foundElements = await screen.findAllByText(trackRe)
    return foundElements.length > 1 ?
      foundElements[school.toLowerCase() === 'eng' ? 0 : 1] :
      await screen.findByText(trackRe)
  }

  return sync ? syncGet() : asyncGet()
}

const getTrackPopover = (school, trackName, sync) => {
  const popoverRe = new RegExp(`.*${school.toUpperCase()} ${trackName}.*`)

  const syncGet = () => screen.queryByText(popoverRe)
  const asyncGet = async () => await screen.findByText(popoverRe)

  return sync ? syncGet() : asyncGet()
}

const getCourse = async (course) => {
  const courseRe = new RegExp(`.*course-${course.course.toLowerCase().replace(' ', '-')}.*`)
  return await screen.findByTestId(courseRe)
}

const getExpandedCourse = (course, sync) => {
  const expandedCourseRe = new RegExp(`.*expanded-course-${course.course.toLowerCase().replace(' ', '-')}.*`)
  
  const syncGet = () => screen.queryByTestId(expandedCourseRe)
  const asyncGet = async () => await screen.findByTestId(expandedCourseRe)
  
  return sync ? syncGet() : asyncGet()
}

const getMedianGradeGraph = async (course) => {
  const medianGraphGraphRe = new RegExp(`.*median-grade-graph-${course.toLowerCase().replace(' ', '-')}.*`)
  return await screen.findByTestId(medianGraphGraphRe)
}

export {
  getTrackButton,
  getTrackPopover,
  getCourse,
  getMedianGradeGraph,
  getExpandedCourse,
}