PRAGMA foreign_keys = ON;

CREATE TABLE courses(
  department VARCHAR(10) NOT NULL,
  courseNum VARCHAR(5) NOT NULL,
  fullName VARCHAR(512) NOT NULL,
  medianGrade VARCHAR(5),
  workload VARCHAR(20),
  description VARCHAR(1024),
  PRIMARY KEY (department, courseNum)
);

CREATE TABLE coursePrereqs(
  prereqId INTEGER AUTO_INCREMENT,
  department VARCHAR(10) NOT NULL,
  courseNum VARCHAR(5) NOT NULL,
  prereqInfo VARCHAR(100) NOT NULL,
  PRIMARY KEY (department, courseNum, prereqId),
  FOREIGN KEY (department, courseNum)
    REFERENCES courses (department, courseNum)
    ON DELETE CASCADE
);

CREATE TABLE courseGradeData(
  department VARCHAR(10) NOT NULL,
  courseNum VARCHAR(5) NOT NULL,
  grade VARCHAR(2) NOT NULL,
  percentage VARCHAR(5) DEFAULT '0',
  barInfo VARCHAR(50),
  yCoord VARCHAR(10) DEFAULT '179.778',
  PRIMARY KEY (department, courseNum, grade),
  FOREIGN KEY (department, courseNum)
    REFERENCES courses (department, courseNum)
    ON DELETE CASCADE
  CONSTRAINT either_three_defined_or_three_null
    CHECK ( (NOT (barInfo AND (percentage IS '0'))) AND
            (NOT (barInfo AND (yCoord IS '179.778'))))
);