import React from "react";
import XAxis from './XAxis'
import Bar from "./Bar";
import PropTypes from "prop-types";

class MedianGradeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.xAxisData = {
      "A+": "20.575" ,
      "A": "61.73" ,
      "A-": "102.886" ,
      "B+": "144.04" ,
      "B": "185.196" ,
      "B-": "226.345" ,
      "C+": "267.5" ,
      "C": "308.655" ,
      "C-": "349.81" ,
      "D+": "390.967" ,
      "D": "432.115" ,
      "D-": "473.27" ,
      "E": "514.425" ,
    }
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
                  {Object.entries(grades).map(([grade, gradeData], idx) => <Bar key={idx} xCoord={this.xAxisData[grade]} {...gradeData} />)}
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
  grades: PropTypes.object.isRequired,
  course: PropTypes.string.isRequired,
}

export default MedianGradeGraph;
