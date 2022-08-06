import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap'
import WorkloadCard from '../WorkloadCard';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.renderCourseInfo = this.renderCourseInfo.bind(this)
    }

    renderCourseInfo(course, medianGrade, name) {
        return (
        <Row className='h-100 justify-content-center'
             data-testid={`course-${course.toLowerCase().replace(' ', '-')}`} >
            <Row className='mb-auto p-0 text-center'>
                <span className='p-0' style={{ fontSize: '20px', fontWeight: '500' }}>
                    {course}
                </span>
                <span className='p-0' style={{ fontSize: '14px' }}>
                    Median Grade: {medianGrade ? medianGrade : 'N/A'}
                </span>
            </Row>
            <Row className='text-center py-2 px-auto'>
                <p className='m-0 py-0' style={{fontSize: '18px'}}>{name}</p>
            </Row>
        </Row>)
    }

    render() {
        const { course, medianGrade, workload, name, handleClick } = this.props;

        return <WorkloadCard 
                onClick={handleClick}
                textClass={'m-0 p-1'}
                workload={workload}
                text={this.renderCourseInfo(course, medianGrade, name)}
                headerHeight='25px'
                />
    }
}

Course.propTypes = {
    course: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    medianGrade: PropTypes.string,
    workload: PropTypes.string,
    handleClick: PropTypes.func,
}

export default Course;