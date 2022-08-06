PRAGMA foreign_keys = ON;

-- MATH 412 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('MATH', '412', 'Introduction to Modern Algebra', 'A-', 'moderate', 'The initial topics include ones common to every branch of mathematics: sets, functions (mappings), relations, and the common number systems (integers, rational, real and complex numbers). These are then applied to the study of particular types of mathematical structures: groups, rings, and fields).');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('MATH', '412', 'MATH 215, 255 or 285; and 217; only 1 credit after MATH 312');

-- MATH 465 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('MATH', '465', 'Introduction to Combinatorics', 'A-', 'moderate', 'An introduction to combinatorics, covering basic counting techniques (inclusion-exclusion, permutations and combinations, generating functions) and fundamentals of graph theory (paths and cycles, trees, graph coloring). Additional topics may include partially ordered sets, recurrence relations, partitions, matching theory, and combinatorial algorithms.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('MATH', '465', 'Linear Algebra (one of MATH 214, 217, 256, 286, 296, 417, or 419) or permission of instructor');