import React from "react";
import XAxis from './XAxis'
import Bar from "./Bar";
import PropTypes from "prop-types";

class MedianGradeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.xAxisData = [
      { grade: "A+", xCoord: "20.575" },
      { grade: "A", xCoord: "61.73" },
      { grade: "A-", xCoord: "102.886" },
      { grade: "B+", xCoord: "144.04" },
      { grade: "B", xCoord: "185.196" },
      { grade: "B-", xCoord: "226.345" },
      { grade: "C+", xCoord: "267.5" },
      { grade: "C", xCoord: "308.655" },
      { grade: "C-", xCoord: "349.81" },
      { grade: "D+", xCoord: "390.967" },
      { grade: "D", xCoord: "432.115" },
      { grade: "D-", xCoord: "473.27" },
      { grade: "E", xCoord: "514.425" },
    ]
  }

  render() {
    const { grades, course } = this.props
    
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="550"
        height="200"
        className="main-svg"
        data-testid={`median-grade-graph-${course.toLowerCase().replace(' ', '-')}`}
      >
        <g className="plot" clipPath="url('#clipc730c5xyplot')">
          <g className="barlayer mlayer">
            <g className="trace bars">
              <g className="points">
                  {grades.map((grade, idx) => <Bar key={idx} xCoord={this.xAxisData[idx].xCoord} {...grade} />)}
              </g>
            </g>
          </g>
        </g>
        <XAxis xAxisData={this.xAxisData} />
      </svg>
    )
  }
}

MedianGradeGraph.propTypes = {
  grades: PropTypes.array.isRequired,
  course: PropTypes.string.isRequired,
}

export default MedianGradeGraph;
