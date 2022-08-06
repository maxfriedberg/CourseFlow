import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import utils from '../../utils'
import MedianGradeGraph from '../MedianGradeGraph';

class DetailsBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gradeData: {}
        }
        this.renderDescription = this.renderDescription.bind(this)
        this.renderPrereqs = this.renderPrereqs.bind(this)
        this.renderProfessorInfo = this.renderProfessorInfo.bind(this)
        this.renderSidebar = this.renderSidebar.bind(this)
        this.renderExternalLinks = this.renderExternalLinks.bind(this)
        this.renderGraph = this.renderGraph.bind(this)
    }

    componentDidMount() {
      const { course } = this.props
      if (course?.course) {
        const [ department, courseNum ] = course.course.split(' ')
        axios.get(process.env.API_BASE_URL + `/courses?department=${department}&courseNum=${courseNum}`)
          .then(response => {
            console.log('Received course data: ', response.data)
            if (response.status !== 200) {
              console.log(`Received status of ${response.status}`)
            }
            this.setState({
                gradeData: response.data
            })
          })
          .catch(error => console.log(error.message))
      }
    }

    renderGraph() {
        const { course } = this.props

        return Object.keys(this.state.gradeData).length && course?.course ?
          <MedianGradeGraph grades={this.state.gradeData} course={course.course}/> :
          <div style={{fontSize: '14px'}}>No median grade graph data available.</div>
    }

    renderDescription() {
        const { course } = this.props

        return (
          <Card className='border-0'>
            <Card.Body>
              <Card.Title style={{fontSize: '16px'}}>
                Description
              </Card.Title>
              <Card.Text style={{fontSize: '14px'}}>
                {course?.description ? course.description : 'No course description available'}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      }
    
    renderPrereqs() {
        const { course } = this.props
        let prereqString = course?.prereqs?.length ?
            course.prereqs[0] :
            "No prerequisite information available."

        return (
            <Card className='border-0'>
                <Card.Body className='border-top'>
                    <Card.Title style={{fontSize: '16px'}}>
                        Prerequisites
                    </Card.Title>
                    <Card.Text style={{fontSize: '14px'}}>
                        {prereqString}
                    </Card.Text>
                </Card.Body>
            </Card>   
        )
    }
    
    renderMedianGrade() {
        const { course } = this.props

        return (
            <Card className='border-0'
                  data-testid={`median-grade-${course.course?.toLowerCase().replace(' ', '-')}`}
            >
                <Card.Body className='border-top'>
                    <Card.Title style={{fontSize: '16px'}}>
                        {'Median Grade: '}
                        <span style={{fontWeight: 'normal', fontSize: '14px'}}>
                            {course.median_grade}
                        </span>
                    </Card.Title>
                    {this.renderGraph()}
                </Card.Body>
            </Card>
        )
    }
    
    renderProfessorInfo() {
        const { course } = this.props

        return (
            <Card className='border-0'>
                <Card.Body>
                    <Card.Title style={{fontSize: '16px'}}>
                        Professor
                    </Card.Title>
                    <Card.Text style={{fontSize: '14px'}}>
                        No professor information available.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    renderExternalLinks() {
        const { course } = this.props
        const atlasLink = utils.courseToAtlasLink(course)
        
        return (
            <Card className='mt-auto border-0'>
                <Card.Body>
                    <Row>
                        <Card.Link className='w-auto' href="#" style={{fontSize: '16px', fontWeight: '500'}}>
                            Syllabus
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link className='w-auto' href={atlasLink} style={{fontSize: '16px', fontWeight: '500'}}>
                            Atlas
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link className='w-auto' href="https://lsa.umich.edu/cg/" style={{fontSize: '16px', fontWeight: '500'}}>
                            Course Guide
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        )
    }

    renderSidebar() {
        const { course } = this.props
        return (<>
            <Row>
                {this.renderProfessorInfo(course)}
            </Row>
            <Row className='mt-auto p-auto'>
                {this.renderExternalLinks(course)}
            </Row>
        </>)
    }

    render() {
        return (
            <Row >
                <Col md={8} className='text-center border-right border-dark'>
                    <Row>{this.renderDescription()}</Row>
                    <Row>{this.renderPrereqs()}</Row>
                    <Row>{this.renderMedianGrade()}</Row>
                </Col>
                <Col className='d-flex flex-column border-start'>
                    {this.renderSidebar()}
                </Col>
            </Row>
        )
    }
}

DetailsBody.propTypes = {
    course: PropTypes.object.isRequired
}

export default DetailsBody;