function workloadHeader(workload, height='12px') {
    return {
      width: '100%',
      height: height,
      padding: '0',
      backgroundColor: workload === 'easy' ? '#20CE46' :
               workload === 'moderate' ? '#F7FB57' :
               workload === 'heavy' ? '#FB9A40' :
               workload === 'extremely heavy' ? '#ff6666' :
               'grey'
    }
}

function workloadText(textStyle) {
    return textStyle && Object.keys(textStyle).length ?
            textStyle :
            {fontSize: '11px'}
  }

export default {
    workloadHeader,
    workloadText,
}