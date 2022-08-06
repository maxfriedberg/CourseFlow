import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { CourseDetails } from '../../components/CourseDetails';


class ExpandedCourse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { course, show, onHide } = this.props

    return course ? (
      <Modal show={show} onHide={onHide} size="xl" centered data-testid={`expanded-course-${course?.course?.toLowerCase().replace(' ', '-')}`}>
        <Modal.Header className='d-flex align-items-center justify-content-center text-center'>
            <CourseDetails.Header course={course}/>
        </Modal.Header>
        <Modal.Body className='py-0'>
          <CourseDetails.Body course={course} />
        </Modal.Body>
        <Modal.Footer className='p-0'>
          <CourseDetails.Footer onHide={onHide} />
        </Modal.Footer>
      </Modal>
    ) : null
  }
}

ExpandedCourse.propTypes = {
  course: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default ExpandedCourse;