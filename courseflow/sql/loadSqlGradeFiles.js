const fs = require('fs')

const departments = ['bioinf', 'biology', 'econ', 'eecs', 'math', 'stats']
const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E']

for (const department of departments) {
  const dirName = `../../test/__mocks__/mockData/courses/${department}/`

  fs.readdir(dirName, (err, filenames) => {
    if (err) {
      console.log(err);
      return;
    }
  
    let gradesJson = null
    let outputStr = 'PRAGMA foreign_keys = ON;'
  
    for (const filename of filenames) {
      const file = fs.readFileSync(dirName + filename, 'utf-8');
      outputStr = outputStr.concat(`\n\n--${department.toUpperCase()} ${filename.split('.')[0]}--\n`)
      gradesJson = JSON.parse(file)
      for (const [idx, gradeObj] of gradesJson.medianGradeData.entries()) {
        outputStr = outputStr.concat(`INSERT INTO courseGradeData(department, courseNum, grade${gradeObj.percentage && gradeObj.barInfo && gradeObj.yCoord ? ', percentage, barInfo, yCoord' : ''})\nVALUES ('${department.toUpperCase()}', '${filename.split('.')[0]}', '${grades[idx]}'${gradeObj.percentage && gradeObj.barInfo && gradeObj.yCoord ? `, '${gradeObj.percentage}', '${gradeObj.barInfo}', '${gradeObj.yCoord}'` : ''});\n`)
      }
    };
    // console.log(outputStr)
    fs.writeFile(`./data/courses/medianGrades/${department}.sql`, outputStr, (err) => err && console.log(err))
  });
}