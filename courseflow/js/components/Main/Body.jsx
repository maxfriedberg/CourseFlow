import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap'
import Tracks from '../Tracks';
import Courses from '../Courses';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tracks, handleTrackSelection, courses } = this.props;

    return (
        <>
        <Col md={3} className='p-0'>
            <Tracks
                tracks={tracks}
                handleTrackSelection={handleTrackSelection} />
        </Col>
        <Col md={8}>
            <Courses courses={courses}/>
        </Col>
        </>
    )
  }
}

Body.propTypes = {
    tracks: PropTypes.array.isRequired,
    handleTrackSelection: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
}

export default Body;