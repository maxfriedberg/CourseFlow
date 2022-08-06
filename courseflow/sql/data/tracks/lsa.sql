PRAGMA foreign_keys = ON;

-- Artificial Intelligence --
INSERT INTO tracks(school, trackName, description, note)
VALUES ('LSA', 'Artificial Intelligence', 'AI is a broadly based multidisciplinary area comprising theoretical, experimental, and applied investigations of intelligent systems.', 'You may take at most one 500-level EECS course for the above requirements.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Artificial Intelligence', 'EECS 492');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Artificial Intelligence', 'EECS 4445 or EECS 545');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Artificial Intelligence', 'one of EECS 442, 543, 545, 595');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Artificial Intelligence', 'a 4th ULCS of student’s choice.');

-- Bioinformatics --
INSERT INTO tracks(school, trackName, description, note)
VALUES ('LSA', 'Bioinformatics', 'Computation plays an increasingly important role in modern biology. This is an interdisciplinary track.', 'This track is not open to Biology Majors.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Bioinformatics', 'at least two of: EECS 445, 477, 484, 485, 492');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Bioinformatics', 'a 3rd  ULCS course of student’s choice');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Bioinformatics', 'BIOINF 529');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Bioinformatics', 'BIOLOGY 305 or MCDB 310');

-- Data and Information --
INSERT INTO tracks(school, trackName, description)
VALUES ('LSA', 'Data and Information', 'Fast information storage and retrieval are crucial to many computer applications, and manipulating large data collections on servers or networks pose difficult challenges for computer professionals.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Data and Information', 'EECS 445');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Data and Information', 'EECS 484');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Data and Information', 'one of EECS 477, 482, 485, 492');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Data and Information', 'a 4th ULCS of student’s choice');

-- Economics and Computation --
INSERT INTO tracks(school, trackName, description, note)
VALUES ('LSA', 'Economics and Computation', 'As social and market interactions become more computational, computer science has adopted more traditional economic concepts such as decentralized decision-making and allocation of resources. This is an interdisciplinary track.', 'You may take at most one 500-level EECS course for the above requirements This track is not open to Economics Majors.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Economics and Computation', 'EECS 492');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Economics and Computation', 'at least two of: EECS 475, 485, 588');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Economics and Computation', 'ECON 401');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Economics and Computation', 'one of: ECON 406, 409, 431, 442');

-- Robotics and Vision --
INSERT INTO tracks(school, trackName, description)
VALUES ('LSA', 'Robotics and Vision', 'Until recently most robots were stationary manufacturing devices, but they are rapidly evolving into mobile information gathering and decision-making platforms, with vision being perhaps their most important information gathering capability.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Robotics and Vision', 'EECS 467');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Robotics and Vision', 'EECS 442');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Robotics and Vision', 'one of: EECS 492, EECS 445, 542, 543, 567, 568');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Robotics and Vision', 'a 4th ULCS course of student’s choice');

-- Security --
INSERT INTO tracks(school, trackName, description)
VALUES ('LSA', 'Security', 'Security for hardware, software, and networked systems is one of the fastest growing areas of computer science.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Security', 'EECS 388');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Security', 'EECS 475 or 575');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Security', 'one of: EECS 482, 484, or 485');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Security', 'a 4th ULCS course of student’s choice');

-- Software Development --
INSERT INTO tracks(school, trackName, description)
VALUES ('LSA', 'Software Development', 'Designing and developing large software systems is a formidable engineering challenge and is the primary enterprise of the software industry.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Software Development', 'EECS 481');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Software Development', 'EECS 477');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Software Development', 'EECS 485');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Software Development', 'a 4th ULCS course of student’s choice');

-- Software Systems --
INSERT INTO tracks(school, trackName, description)
VALUES ('LSA', 'Software Systems', 'Software systems are the tools and applications we use when we compute.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Software Systems', 'at least three of: EECS 388, 482, 483, 484, 489');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Software Systems', 'a 4th ULCS course of student’s choice');

-- Theory of Computation --
INSERT INTO tracks(school, trackName, description, note)
VALUES ('LSA', 'Theory of Computation', 'Research on mathematical foundations has enormously influenced the development of computer science, yielding advances in data management, communications, security, and may other areas. This is an interdisciplinary track.', 'This track is not open to Math Majors.');

INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Theory of Computation', 'EECS 477');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Theory of Computation', 'EECS 445 or 475');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Theory of Computation', 'one of: EECS 574, 575, 586');
INSERT INTO trackPrereqs(school, trackName, prereqInfo)
VALUES ('LSA', 'Theory of Computation', 'two of the following: Math 412, 465, 425, 475, Stats 426, IOE 510, 512, 518, and EECS 550');
