PRAGMA foreign_keys = ON;

-- ECON 401 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ("ECON", "401", "Intermediate Microeconomic Theory", "B+", "moderate", "The subject of this course are households' and firms' economic choices, and the way in which these choices interact in markets. We also discuss ways in which the performance of markets can be evaluated normatively. The course emphasizes theory over data. Empirical methods are taught in other courses. The theories developed in this course form the basis of much empirical work. We use mathematical tools such as graphs, equations, and calculus.");
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ("ECON", "401", "MATH 115 or 116 or 121 or 156 or 176 or 185 or 186 or 215 or 285 or 295 or 296; (C or better)");

-- ECON 409 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ("ECON", "409", "Game Theory", "A-", "easy", "The same principles that govern the strategic interaction of players in parlor games like Chess or Poker turn out to be widely applicable to a whole range of problems in economics, biology, and political science. This course introduces the subject of game theory, exploring the beginnings of the subject using simple illustrative examples, such as bargaining, auctions, duopolistic competition, and wars of attrition.");
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ("ECON", "409", "ECON 401 (C- or better) or Graduate");

-- ECON 431 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload)
VALUES ("ECON", "431", "Industrial Organization and Performance", "B", "easy");
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ("ECON", "431", "ECON 401 (C- or better) or Graduate");

-- ECON 442 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ("ECON", "442", "International Finance", "A-", "easy", "This course develops macroeconomic analysis and issues for an open economy. Topics include: the foreign exchange market and the balance of payments; the income-absorption and monetary-asset market approaches to national income determination and the balance of payments; macro stabilization policies and central bank intervention under fixed and floating exchange rates; Eurocurrency markets; monetary integration, and reform of the international monetary system.");
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ("ECON", "442", "ECON 402 (C- or better) or Graduate");
