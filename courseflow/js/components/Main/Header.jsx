import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap'
import WorkloadCard from '../WorkloadCard';
import utils from '../../utils';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderResetButton = this.renderResetButton.bind(this);
    this.renderCurrentTrack = this.renderCurrentTrack.bind(this);
    this.renderKeyCards = this.renderKeyCards.bind(this);
    this.workloads = ['Easy', 'Moderate', 'Heavy', 'Extremely Heavy', 'No Data']
  }

  renderResetButton() {
    const { handleReset, track } = this.props

    return (
      <Button className='m-auto' onClick={handleReset} disabled={!track}>
        Reset
      </Button>
    )
  }

  renderCurrentTrack() {
    const { track, school } = this.props;

    return (
      <Button disabled
              variant="outline-primary"
              style={{fontSize: '20px', fontWeight: 'bold', opacity: '1'}}
              className='w-100'>
        {track ? `Current track: ${school} ${track}` : 'No track selected'}
      </Button>
    )
  }

  renderKeyCards() {
    return (
      <Row>
        {this.workloads.map((workload) => {
          return (
            <Col md key={`workload-${workload}`} className={'px-1'}>
              <WorkloadCard workload={workload} text={utils.capitalizeEachWord(workload)}/>
            </Col>
          )
        })}
      </Row>
    )
  }

  render() {
    return (
      <>
      <Col md={3}>
        {this.renderKeyCards()}
      </Col>
      <Col md className='d-flex px-5'>
        {this.renderCurrentTrack()}
      </Col>
      <Col md={1} className='d-flex'>
        {this.renderResetButton()}
      </Col>
      </>
    )
  }
}

Header.propTypes = {
  track: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired
}

export default Header;