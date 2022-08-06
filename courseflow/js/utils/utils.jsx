function prereqDictToString(object, connector) {
    let returnString = ''
    
    for (let [index, element] of object.entries()) {
      if (typeof element === 'string' || element instanceof String) {
        const display = element === 'GRAD' ?
          'Graduate Standing' :
          element === 'SENIOR' ?
            'Senior Standing' :
            element.includes('Junior') || element.includes('junior') ?
              'Junior (or above) Standing' :
              element
        returnString += index === object.length - 1 ? 
          display :
          `${display} ${connector} `
      }
      else if (Array.isArray(element)) {
        returnString += index === object.length - 1 ?
          `one of: [ ${prereqDictToString(element, 'OR')} ]` :
          `one of: [${prereqDictToString(element, 'OR')}] ${connector} `
      }
      else {
        returnString += index === object.length - 1 ?
          `( ${prereqDictToString(Object.values(element), 'AND')} )` :
          `(${prereqDictToString(Object.values(element), 'AND')}) ${connector} `
      }
    }

    return returnString
}

function capitalizeEachWord(inputString) {
  return inputString ? 
    inputString.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ") :
    ''
}

function courseToAtlasLink(course) {
  const courseSlug = course?.course ? course.course.trim().replace(' ', `%20`) : null
  return courseSlug ? `https://atlas.ai.umich.edu/course/${courseSlug}/` : null
}

export default {
  prereqDictToString,
  capitalizeEachWord,
  courseToAtlasLink,
}