import React from 'react';
import PropTypes from 'prop-types';

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { percentage, barInfo, xCoord, yCoord } = this.props

    return (
      <g className="point">
        {barInfo && <path
          fill="#3C6DEA"
          d={barInfo}
          vectorEffect="non-scaling-stroke"
        ></path>}
        <text
          fill="#3C6DEA"
          className="bartext bartext-outside"
          data-math="N"
          data-notex="1"
          data-unformatted={`${percentage}%`}
          fontFamily="Usual, Helvetica, Arial, sans-serif"
          fontSize="11"
          textAnchor="middle"
          transform={`translate(${xCoord} ${yCoord})`}
          style={{ whiteSpace: "pre" }}
        >
          {`${percentage}%`}
        </text>
      </g>
    )
  }
}

Bar.propTypes = {
  percentage: PropTypes.string.isRequired,
  barInfo: PropTypes.string,
  xCoord: PropTypes.string.isRequired,
  yCoord: PropTypes.string.isRequired,
}

export default Bar;