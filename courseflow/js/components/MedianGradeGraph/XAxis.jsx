import React from 'react';
import PropTypes from 'prop-types'

class XAxis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { xAxisData } = this.props

    return (
    <g className="xaxislayer-above">
      {Object.entries(xAxisData).map(([grade, xCoord]) => (
        <text
          key={grade}
          y="198"
          fill="#444"
          data-math="N"
          data-unformatted={grade}
          fontFamily="Usual, Helvetica, Arial, sans-serif"
          fontSize="12"
          textAnchor="middle"
          transform={`translate(${xCoord})`}
          className="0"
          style={{ whiteSpace: "pre" }}
        >
          {grade}
        </text>
      ))}
    </g>)
  }
}

XAxis.propTypes = {
  xAxisData: PropTypes.object.isRequired,
}

export default XAxis;