import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import utils from '../../utils';
  
class WorkloadCard extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    const { workload, text, cardClass='', textStyle={}, textClass='', rounded=false, headerHeight='12px', onClick } = this.props
    return (
      <Card onClick={onClick} className={cardClass ? cardClass : 'h-100 w-100 border border-1 rounded-3'} data-testid='workload-card'>
        <Card.Header 
          className={rounded ?
            'rounded-1' :
            'rounded-top-1'}
          style={utils.styling.workloadHeader(workload?.toLowerCase(), headerHeight)}
        />
        <Card.Body
          className={textClass ?
              textClass :
              'd-flex align-items-center justify-content-center text-center p-1'}
          style={utils.styling.workloadText(textStyle)}
        >
          {text}
        </Card.Body>
      </Card>
    )
  }
}

WorkloadCard.propTypes = {
  workload: PropTypes.string,
  cardClass: PropTypes.string,
  textStyle: PropTypes.object,
  textClass: PropTypes.string,
  rounded: PropTypes.bool,
  headerHeight: PropTypes.string,
  onClick: PropTypes.func,
}

export default WorkloadCard;