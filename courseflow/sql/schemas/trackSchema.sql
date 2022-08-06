PRAGMA foreign_keys = ON;

CREATE TABLE tracks(
  school VARCHAR(5) NOT NULL,
  trackName VARCHAR(50) NOT NULL,
  description VARCHAR(1024),
  note VARCHAR(1024),
  PRIMARY KEY (school, trackName)
);

CREATE TABLE trackPrereqs(
  prereqId INTEGER AUTO_INCREMENT,
  school VARCHAR(5) NOT NULL,
  trackName VARCHAR(50) NOT NULL,
  prereqInfo VARCHAR(100) NOT NULL,
  PRIMARY KEY (school, trackName, prereqId),
  FOREIGN KEY (school, trackName)
    REFERENCES tracks (school, trackName)
    ON DELETE CASCADE
);

CREATE TABLE trackCourses(
  school VARCHAR(5) NOT NULL,
  trackName VARCHAR(50) NOT NULL,
  department VARCHAR(10) NOT NULL,
  courseNum VARCHAR(5) NOT NULL,
  PRIMARY KEY (school, trackName, department, courseNum)
  FOREIGN KEY (school, trackName)
    REFERENCES tracks (school, trackName)
    ON DELETE CASCADE,
  FOREIGN KEY (department, courseNum)
    REFERENCES courses (department, courseNum)
    ON DELETE CASCADE
);