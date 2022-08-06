import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';
import ExpandedCourse from '../../modals/ExpandedCourse';
import { Row, Col } from 'react-bootstrap';

class CoursesContainer extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      selectedCourse: {},
      showModal: false,
    }
    this.handleCourseClick = this.handleCourseClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.groupCourses = this.groupCourses.bind(this);
  }

  handleCourseClick(course) {
    return () => {
      this.setState({
        selectedCourse: course,
        showModal: true,
      })
    }
  }

  hideModal() {
    this.setState({
      selectedCourse: {},
      showModal: false,
    })
  }

  groupCourses(courses) {
    let groups = {}
    courses.forEach((course, index) => {
      const rowNum = Math.floor(index / 2)
      if (rowNum in groups) {
        groups[rowNum].push(course)
      }
      else {
        groups[rowNum] = [course]
      }
    })
    return groups
  }

  render() {
    const rows = this.groupCourses(this.props.courses)
    return (
    <>
      {Object.keys(rows).map((rowNum) => {
        return (
          <Row key={rowNum} className={'mb-3 px-5 justify-content-center'}>
            {rows[rowNum].map((curCourse, colIdx) => {
              return (
                <Col key={colIdx} md={6} >
                  <Course
                    course={curCourse.course}
                    medianGrade={curCourse.median_grade}
                    workload={curCourse.workload}
                    name={curCourse.name}
                    handleClick={this.handleCourseClick(curCourse)}
                  />
                </Col>
              )
            })}
          </Row>)
        }
      )}
      <ExpandedCourse 
        course={this.state.selectedCourse}
        show={this.state.showModal}
        onHide={this.hideModal}/>
    </>
    )
  }
}

CoursesContainer.propTypes = {
  courses: PropTypes.array.isRequired,
}

export default CoursesContainer;