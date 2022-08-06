import React from 'react';
import PropTypes from 'prop-types';
import WorkloadCard from '../../components/WorkloadCard';
import utils from '../../utils'

class DetailsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeaderText = this.renderHeaderText.bind(this)
  }

  renderHeaderText(course) {
    return (<>
      <h5 className='text-center m-0'>
        {`${course.course}: ${course.name}`}
      </h5>
      <p className='text-center m-0' style={{fontSize: '16px'}}>
        {course?.workload ?
          `${utils.capitalizeEachWord(course.workload)} Workload` :
          'No Workload Data'}
      </p>
    </>)
  }

  render() {
    const { course } = this.props

    return (
      <WorkloadCard
        workload={course?.workload ? course.workload : ''}
        text={this.renderHeaderText(course)}
        cardClass='border-0 w-100 rounded'
        textClass='pb-0 mb-0'
        rounded={true}
      />
    )
  }
}

DetailsHeader.propTypes = {
  course: PropTypes.object.isRequired,
}

export default DetailsHeader;