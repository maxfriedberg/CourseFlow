import tracks from './mockData/tracks'
import courseGradeData from '../__mocks__/mockData/courses'


const getCoursesFromQuery = (school, track) => {
  for (const [schoolName, tracks] of Object.entries(tracks.all)) {
    if (schoolName.toLowerCase() === school.toLowerCase()) {
      for (const trackObj of tracks) {
        if (trackObj.name.toLowerCase() === track.toLowerCase()) {
          return {
            school: schoolName,
            track: trackObj.name,
            requirements: trackObj.course_details,
          }
        }
      }
    }
  }
}

const getCourseDetailsFromQuery = (department, courseNum) => {
  const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E']
  const gradeMap = {}
  const gradeData = Object.keys(courseGradeData).includes(department.toLowerCase()) &&
                    Object.keys(courseGradeData[department.toLowerCase()]).includes(courseNum) ?
                      courseGradeData[department.toLowerCase()][courseNum] : []
  
  gradeData.forEach((gradeObj, idx) => {
    gradeMap[grades[idx]] = {
      percentage: gradeObj?.percentage ? gradeObj.percentage : '0',
      barInfo: gradeObj?.barInfo ? gradeObj.barInfo : null,
      yCoord: gradeObj?.yCoord ? gradeObj.yCoord : '179.778',
    }
  })
  return gradeMap
}

export default (url) => {
  if (url.includes('/tracks/')) {
    const school = url.split('/tracks/')[1].split('?')[0]
    const track = url.split('?')[1].includes('track') ?
      url.split('?')[1].split('track=')[1] :
      null
    return getCoursesFromQuery(school, track)
  }
  if (url.includes('/courses')) {
    const department =  url.split('?')[1].split('department=')[1].split('&')[0]
    const courseNum = url.split('?')[1].split('courseNum=')[1]
    return department && courseNum ? getCourseDetailsFromQuery(department, courseNum) : null
  }
  if (url === '/api') {
    return tracks.all
  }
  else {
    console.log('I dont understand the URL you provided.')
    console.log(`Offending URL: ${url}`)
  }
  return null
}