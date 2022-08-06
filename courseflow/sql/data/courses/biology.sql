PRAGMA foreign_keys = ON;

-- BIOLOGY 305 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('BIOLOGY', '305', 'Genetics', 'B+', 'moderate', 'This introduction to genetics includes the following sections: DNA and chromosomes; gene transmission in Eukaryotes; linkage and recombination; genes and enzymes, the genetic code, and mutation; recombinant DNA, RFLP mapping, the Human Genome Project; gene regulation, transposons; population genetics; and quantitative genetics.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('BIOLOGY', '305', '[BIOLOGY 171 and (172 or 174)] or BIOLOGY 192 or 195');