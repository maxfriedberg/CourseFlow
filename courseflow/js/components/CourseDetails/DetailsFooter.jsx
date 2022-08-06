import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Row,
  Col,
} from 'react-bootstrap';


class DetailsFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onHide } = this.props
    return (
      <Row className='w-100 m-2'>
        <Col md={6} className='my-auto text-muted' style={{fontSize:'14px'}}>
          All course data taken from <a>https://atlas.ai.umich.edu/</a>
        </Col>
        <Col></Col>
        <Col md='auto' className='my-auto p-0'>
          <Button className='py-1' style={{fontSize: '14px'}} onClick={onHide}>Close</Button>
        </Col>
      </Row>
    )
  }
}

DetailsFooter.propTypes = {
  onHide: PropTypes.func.isRequired,
}

export default DetailsFooter;