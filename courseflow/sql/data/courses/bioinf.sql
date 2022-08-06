PRAGMA foreign_keys = ON;

-- BIOINF 529 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('BIOINF', '529', 'Bioinformatics Concepts and Algorithms', 'A+', 'moderate', 'This course will introduce students to common topics in bioinformatics as well as corresponding computational approaches in those areas. Students will learn how to implement and apply various algorithms and statistical models to solve challenging problems and will also build a foundation for developing tools for future technologies.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('BIOINF', '529', 'BIOINF 575');