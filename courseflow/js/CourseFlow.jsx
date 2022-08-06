import React from 'react';
import axios from 'axios'
import { Header, Body } from './components/Main'
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CourseFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSchool: '',
      selectedTrack: '',
      selectedTrackRequirements: [],
      tracks: []
    }
    this.handleTrackSelection = this.handleTrackSelection.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleTrackSelection(school, trackObj) {
    return (() => {
      if (school && trackObj.name) {
        axios.get(`${process.env.API_BASE_URL}/tracks/${school}?track=${trackObj.name}`)
          .then(response => {
            console.log('Received track data: ', response.data);
            if (response.status !== 200) {
              console.log(`Received status of ${response.status}`)
            }
            this.setState({
              selectedSchool: school,
              selectedTrack: trackObj.name,
              selectedTrackRequirements: response.data.requirements ? response.data.requirements : [],
            })
          })
          .catch(error => console.log(error.message))
      }
      else {
        console.log(`Error: school '${school}' and track '${trackObj.name}' not recognized.`)
      }
    })
  }

  handleReset() {
    this.setState({
      selectedSchool: '',
      selectedTrack: '',
      selectedTrackRequirements: [],
    })
  }

  componentDidMount() {
    axios.get(process.env.API_BASE_URL)
      .then(response => {
        for (const [school, schoolTracks] of Object.entries(response.data)) {
          console.log(`Received tracks from ${school}`)
          this.setState(curState => ({
            tracks: [
              ...curState.tracks,
              {
                school: school,
                tracks: schoolTracks
              }
            ]
          }))
        }
        if (response.status !== 200) {
          console.log(`Received status of ${response.status}`)
        }
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  render() {
    return (
      <>
        <Row className={'m-4'}>
          <Header 
            track={this.state.selectedTrack}
            school={this.state.selectedSchool}
            handleReset={this.handleReset}
          />
        </Row>
        <Row className={'m-4'}>
          <Body 
            tracks={this.state.tracks}
            handleTrackSelection={this.handleTrackSelection}
            courses={this.state.selectedTrackRequirements}
          />
        </Row>
      </>
    );
  }
}

export default CourseFlow;