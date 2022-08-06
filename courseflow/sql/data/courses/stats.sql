PRAGMA foreign_keys = ON;

-- STATS 426 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('STATS', '426', 'Introduction to Theoretical Statistics', 'B+', 'moderate', 'An introduction to theoretical statistics for students with a background in probability. Probability models for experimental and observational data, normal sampling theory, likelihood-based and Bayesian approaches to point estimation, confidence intervals, tests of hypotheses, and an introduction to regression and the analysis of variance. This course serves as a prerequisite for many graduate-level statistics courses.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('STATS', '426', '(MATH/STATS 425 or STATS 412) and (MATH 214 or 217)');