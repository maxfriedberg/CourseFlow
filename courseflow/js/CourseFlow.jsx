import React from 'react';
import PropTypes from 'prop-types';
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
    this.retrieveTrackData = this.retrieveTrackData.bind(this);
    this.retrieveTracksPerSchool = this.retrieveTracksPerSchool.bind(this);
    this.handleTrackSelection = this.handleTrackSelection.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  retrieveTracksPerSchool(url) {
    axios.get(url)
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

  retrieveTrackData(school, track) {
    const url = school && track ? `/api?school=${school}&track=${track}` : ''
    axios.get(url)
      .then(response => {
        console.log('Received track data: ', response.data);
        if (response.status !== 200) {
          console.log(`Received status of ${response.status}`)
        }
        this.setState({
          selectedSchool: school,
          selectedTrack: track,
          selectedTrackRequirements: response.data.requirements ? response.data.requirements : [],
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  handleTrackSelection(school, trackObj) {
    return (() => {
      this.retrieveTrackData(school, trackObj.name)
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
    const { url } = this.props;
    this.retrieveTracksPerSchool(url)
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

CourseFlow.propTypes = {
  url: PropTypes.string.isRequired,
};

export default CourseFlow;