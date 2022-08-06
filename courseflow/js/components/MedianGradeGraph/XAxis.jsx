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
      {xAxisData.map((gradeData) => (
        <text
          key={gradeData.grade}
          y="198"
          fill="#444"
          data-math="N"
          data-unformatted={gradeData.grade}
          fontFamily="Usual, Helvetica, Arial, sans-serif"
          fontSize="12"
          textAnchor="middle"
          transform={`translate(${gradeData.xCoord})`}
          className="0"
          style={{ whiteSpace: "pre" }}
        >
          {gradeData.grade}
        </text>
      ))}
    </g>)
  }
}

XAxis.propTypes = {
  xAxisData: PropTypes.array.isRequired,
}

export default XAxis;