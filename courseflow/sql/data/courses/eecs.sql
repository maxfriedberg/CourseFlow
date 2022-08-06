PRAGMA foreign_keys = ON;

-- ******************************** --
-- ************* 200s ************* --
-- ******************************** --

-- EECS 270 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '270', 'Introduction to Logic Design', 'B+', 'moderate', 'Boolean algebra, digital design techniques, logic gates, logic and state minimization, standard combinational circuits, latches and flip-flops, sequential circuits, synthesis of synchronous sequential circuits, state machines, FPGAs, memories, arithmetic circuits, and computer-aided design. Laboratory involves CAD-based design implemented on a FPGA including elementary interfacing.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '270', 'EECS 180 or 183 or ENGR 101 or 151; (C or better, No OP/F)');

-- EECS 285 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '285', 'Practical Programming in Java', 'A', 'moderate', 'Introduction to Java programming, including language features, design principles, and programming practices. Topics include: Java syntax and semantics, object-oriented design, exception handling, graphical user interfaces, mobile-application development, asynchronous programming, and unit testing.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '285', 'EECS 280; (C or better; No OP/F)');


-- ******************************** --
-- ************* 300s ************* --
-- ******************************** --

-- EECS 373 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '373', 'Introduction to Embedded Systems Design', 'A-', 'heavy', 'Principles of designing application-specific computer systems that interact with the physical world. Covers memory-mapped I/O, interrupts, analog interfacing, microprocessors, reconfigurable hardware, sensors, and actuators. Complex hardware/software system design and implementation. Substantial student-defined team design project.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '373', '(EECS 270 or CMPTRSC 270) & (EECS 370 or CMPTRSC 370) and Junior or Above; (C or better, No OP/F)');

-- EECS 388 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '388', 'Introduction to Computer Security', 'A-', 'moderate', 'This course introduces the principles and practices of computer security as applied to software, host systems, and networks. It covers the foundations of building, using, and managing secure systems. Topics include standard cryptographic functions and protocols, threats and defenses for real-world systems, incident responses, and computer forensics. There will be homework exercises, programming projects, and a final exam.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '388', 'EECS 281; (C or better, No OP/F). Enrollment in one minor elective allowed for Computer Science Minors.');


-- ******************************** --
-- ************* 400s ************* --
-- ******************************** --

-- EECS 427 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '427', 'Very Large Scale Integrated Design I', 'A', 'extremely heavy', 'Design techniques for full-custom VLSI circuits. Design rule checking, logic and circuit simulation. CMOS circuit delay and power analysis. High performance and low power VLSI systems. CMOS logic circuit families, adders, multipliers, memory arrays, sequential circuits, and interconnects. Clock and power distribution. Major design project to implement a RISC processor.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '427', 'EECS 270 and 312; (C or better; no OP/F) or Graduate Standing');

-- EECS 441 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '441', 'Mobile App Development for Entrepreneurs', 'A', 'easy', 'Best practices in the software engineering of mobile applications and best practices of software entrepreneurs in the design, production and marketing of mobile apps. Students will engage in the hands-on practice of entrepreneurship by actually inventing, building, and marketing their own mobile apps.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '441', 'Senior standing and EECS 281 and at least 4 credit hours of Upper Level Electives from list in Computer Science or Computer Engineering; (C or better, No OP/F)');

-- EECS 442 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '442', 'Computer Vision', 'A', 'easy', 'An introduction to 2D and 3D computer vision. Topics include: camera models, the geometry of multiple views; shape reconstruction methods from visual cues; low-level image processing techniques such as feature detection; high-level vision problems such as object recognition and scene understanding.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '442', '[(EECS 281 and (MATH 214 or 217 or 296 or 417 or 419 or ROB 101)); (C or better, No OP/F)] or graduate standing');

-- EECS 445 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '445', 'Introduction to Machine Learning', 'A-', 'heavy', 'Theory and implementation of state of the art machine learning algorithms for large-scale real-world applications. Topics include supervised learning (regression, classification, kernal methods, neural networks, and regularization) and unsupervised learning, (clustering, density estimation, and dimensionality and reduction).');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '445', 'EECS 281 and (MATH 214 or 217 or 296 or 417 or 419 or ROB 101); (C or better; No OP/F)');

-- EECS 467 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '467', 'Autonomous Robotics Design Experience', 'A', 'heavy', 'Software methods and implementation for robot perception, world mapping, and control, using physical robots. Topics include: sensor, sensor processing, control, motion planning, localization and mapping, and forward and inverse kinematics. Multiple team projects, culminating in a major design experience (MDE) project.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '467', 'EECS 281 and (MATH 214 or 217 or 296 or 417 or 419 or ROB 101) and (EECS 367 or 373); (C or better, No OP/F)');

-- EECS 470 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '470', 'Computer Architecture', 'A-', 'extremely heavy', 'Topics include out-of-order processors and speculation, memory hierarchies, branch prediction, virtual memory, cache design, multi-processors, and parallel processing including cache coherence and consistency. Emphasis on power and performance trade-offs. Groups design an advanced (e.g. out-of-order, multi-core, SMT) processor using an HDL.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '470', '{[(EECS 270 or CMPTRSC 270) and (EECS 370 or CMPTRSC 370)] ; (C or better, No OP/F)} or Graduate Standing');

-- EECS 475 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '475', 'Introduction to Cryptography', 'B+', 'moderate', 'Covers fundamental concepts, algorithms, and protocols in cryptography. Topics: ancient ciphers, Shannon theory, symmetric encryption, public key encryption, hash functions, digital signatures, key distribution. Highlights AES, RSA, Discrete Log, Elliptic Curves. Emphasizes rigorous mathematical study in terms of algorithmic complexity. Includes necessary background from algorithms, probability, number theory, and algebra.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '475', '(EECS 203 or MATH 312 or 412) and (EECS 180 or 183 or 280) and (EECS 376); (C or better, No OP/F)');

-- EECS 477 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '477', 'Introduction to Algorithms', 'B+', 'moderate', 'Fundamental techniques for designing efficient algorithms and basic mathematical methods for analyzing their performance. Paradigms for algorithm design: divide-and-conquer, greedy methods, graph search techniques, dynamic programming. Design of efficient data structures and analysis of the running time and space requirements of algorithms in the worst and average cases.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '477', 'EECS 281 & 376; (C or better, No OP/F)');

-- EECS 478 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '478', 'Logic Circuit Synthesis and Optimization', 'A-', 'moderate', 'Advanced design of logic circuits. Technology constraints. Theoretical foundations. Computer-aided design algorithms. Two-level and multilevel optimization of combinational circuits. Optimization of finite-state machines. High-level synthesis techniques: modeling, scheduling, and binding. Verification and testing. Emerging technologies. Lab projects on CAD software development.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '478', '[(EECS 203 or 303 or CMPTRSC 203 or 303) and (EECS 270 or CMPTRSC 270); C or better No OP/F, and Senior] or Graduate Standing');

-- EECS 481 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '481', 'Software Engineering', 'A-', 'moderate', 'Pragmatic aspects of the production of software systems, dealing with structuring principles, design methodologies and informal analysis. Emphasis is given to development of large, complex software systems. A term project usually required.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '481', 'EECS 281; (C or better, No OP/F)');

-- EECS 482 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '482', 'Introduction to Operating Systems', 'B+', 'extremely heavy', 'Operating system design and implementation: multi-tasking; concurrency and synchronization; inter-process communication; deadlock; scheduling; resource allocation; memory and storage management; input-output; file systems; protection and security. Students write several substantial programs dealing with concurrency and synchronization in a multi-task environment, with file systems, and with memory management.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '482', 'EECS 281 and 370; (C or better, No OP/F) or Graduate Standing in CSE. Enrollment in one minor elective allowed for Computer Science Minors.');

-- EECS 483 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '483', 'Compiler Construction', 'A', 'heavy', 'Introduction to compiler construction. Topics covered will include the following: lexical scanning, parsing (top-down and bottom-up), abstract syntax trees, semantic analysis, code generation and optimization. Students will build a working compiler for a high-level programming language.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '483', 'EECS 281 and 370; (C or better, No OP/F) or Graduate Standing. Enrollment in one minor elective allowed for Computer Science Minors.');

-- EECS 484 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '484', 'Database Management Systems', 'B+', 'moderate', 'Concepts and methods for the design, creation, query and management of large enterprise databases. Functions and characteristics of the leading database management systems. Query languages such as SQL, forms, embedded SQL, and application development tools. Database design, integrity, normalization, access methods, query optimization, transaction management and currency control and recovery.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '484', 'EECS 281; (C or better, no OP/F) or 403; (B or better, no OP/F) or Graduate Standing in CSE. Enrollment in one minor elective allowed for Computer Science Minors.');

-- EECS 485 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '485', 'Web Systems', 'B+', 'moderate', 'Concepts surrounding web systems, applications, and internet scale distributed systems. Topics covered include client/server protocols, security, information retrieval and search engines, scalable data processing, and fault tolerant systems. The course has substantial projects involving development of web applications and web systems.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '485', 'EECS 281; (C or better, No OP/F) or Graduate Standing in CSE. Enrollment in one minor elective allowed for Computer Science Minors.');

-- EECS 486 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '486', 'Information Retrieval and Web Search', 'A-', 'easy', 'Information Retrieval and Web Search ---Covers background and recent advances in information retrieval (IR): indexing, processing, querying, classifying data. Basic retrieval models, algorithms, and IR system implementations. Focuses on textual data, but also looks at images/videos, music/audio, and geospatial information. Web search, including Web crawling, link analysis, search engine development, social media, and crowdsourcing.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '486', 'EECS 281; (C or better, No OP/F)');

-- EECS 489 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '489', 'Computer Networks', 'A-', 'heavy', 'Protocols and architectures of computer networks with a specific focus on the Internet. Topics include socket programming, naming and addressing, video streaming and content distribution, flow and congestion control, routing, and cloud, datacenter, and software-defined networks. Students write several substantial programs implementing protocols at different layers of the network stack.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '489', '(EECS 281 and EECS 370); (C or better, No OP/F) or Graduate Standing in CSE');

-- EECS 490 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '490', 'Programming Language', 'A-', 'moderate', 'Programming languages are rich mathematical structures and powerful user interfaces. Students will learn about modern languages from the perspective of both language designers and users, building up from mathematical first principles, and covering human factors in language design, language prototyping, and techniques for reasoning about program behavior.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '490', 'EECS 281; (C or better, No OP/F) or Graduate Standing in CSE. Enrollment in one minor elective allowed for Computer Science Minors.');

-- EECS 491 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '491', 'Introduction to Distributed Systems', 'B+', 'heavy', 'Distributed systems offer higher performance, greater fault-tolerance, and better scalability than single-computer systems, but are challenging to develop. Topics covered: abstractions for simplifying development of distributed systems, techniques used to implement these abstractions, and case studies on the use of these techniques in real-world systems.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '491', 'EECS 482; (C or better, No OP/F) or Graduate Standing in CSE');

-- EECS 492 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '492', 'Introduction to Artificial Intelligence', 'B+', 'moderate', 'Introduction to the core concepts of AI, organized around building computational agents. Emphasizes the application of AI techniques. Topics include search, logic, knowledge representation, reasoning, planning, decision making under the uncertainty, and machine learning.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '492', 'EECS 281; (C or better, No OP/F). Enrollment in one minor elective allowed for Computer Science Minors.');

-- EECS 493 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '493', 'User Interface Development', 'A', 'easy', 'Concepts and techniques for designing computer system user interfaces to be easy to learn and use, with an introduction to their implementation. Task analysis, design of functionality, display and interaction design, and usability evaluation. Interface programming using an object-oriented application framework. Fluency in a standard object-oriented programming language is assumed.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '493', 'EECS 281; (C or better, No OP/F) or Graduate Standing in CSE. Enrollment in one minor elective allowed for Computer Science Minors.');

-- EECS 494 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '494', 'Computer Game Design and Development', 'A', 'extremely heavy', 'Design, development, and application of digital games. Topics include: game engines, design patterns, shaders and graphics programming, agile development methods, iterative game/ experience design, project management and resource allocation, virtual reality, classic games, multidisciplinary relationships, product exhibition, and portfolio construction. Students work in teams to develop and exhibit new games.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '494', 'EECS 281; (C or better, No OP/F)');


-- ******************************** --
-- ************* 500s ************* --
-- ******************************** --

-- EECS 542 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '542', 'Advanced Topics in Computer Vision', 'A', 'moderate', 'The course discusses advanced topics and current research in computer vision. Topics will be selected from various subareas such as physics based vision, geometry, motion and tracking, reconstruction, grouping and segmentation, recognition, activity and scene understanding, statistical methods and learning, systems and applications.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '542', 'EECS 442 or EECS 504 or permission of instructor');

-- EECS 543 --
INSERT INTO courses(department, courseNum, fullName)
VALUES ('EECS', '543', 'Knowledge-Based Systems');

-- EECS 545 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '545', 'Machine Learning', 'A-', 'moderate', 'Fundamentals of supervised, unsupervised, and sequential learning, including linear and nonlinear regression, logistic regression, support vector machines and kernel methods, decision trees, ensemble methods, neural networks and deep learning, dimension reduction, clustering, and probabilistic models. Emphasis on implementation and application to real-world data. Includes algorithms and derivations from fundamental principles.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '545', 'Coursework in probability, linear algebra, and programming');

-- EECS 550 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '550', 'Information Theory', 'A', 'moderate', 'Measures of information, such as entropy, conditional entropy, mutual and directed information and Kullback-Leibler divergence; fundamental limits to the performance of communication systems, including source coding (data compression) and channel coding (reliable transmission through noisy media); elementary source and channel coding techniques; information theoretic bounds on the performance of estimation/decision systems.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '550', 'EECS 501');

-- EECS 567 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '567', 'Robotic Kinematics and Dynamics', 'A', 'moderate', 'Geometry, kinematics, differential kinematics, dynamics, and control of robot manipulators. The mathematical tools required to describe spatial motion of a rigid body will be presented in full. Motion planning including obstacle avoidance is also covered.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '567', 'Graduate standing or permission of instructor');

-- EECS 574 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '574', 'Computational Complexity', 'A-', 'easy', 'Fundamentals of the theory of computation and complexity theory. Computability, undecidability, and logic. Relations between complexity classes, NP- completeness, P-completeness, and randomized computation. Applications in selected areas such as cryptography, logic programming, theorem proving, approximation of optimization problems, or parallel computing.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '574', 'EECS 376 or graduate standing');

-- EECS 575 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '575', 'Advanced Cryptography', 'A-', 'moderate', 'A rigorous introduction to the design of cryptosystems and to cryptanalysis. Topics include cryptanalysis o classical cryptosystems; theoretical analysis of one-way functions; DES and differential cryptanalysis; the RSA cryptosystem; EIGamal, elliptic, hyper elliptic and hidden monomial cryptosystems; attacks on signature schemes, identification schemes and authentication codes; secret sharing; and zero knowledge.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '575', 'EECS 203 or equivalent. EECS 574 recommended');

-- EECS 588 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '588', 'Computer and Network Security', 'A', 'easy', 'Survey of advanced topics and research issues in computer and network security. Topics will be drawn from a variety of areas of such as mandatory and discretionary security policies, secure storage, security darnels, trust management, preventing software vulnerabilities, applied cryptography, network security.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '588', 'EECS 482 or 489; or graduate standing.');

-- EECS 595 --
INSERT INTO courses(department, courseNum, fullName, medianGrade, workload, description)
VALUES ('EECS', '595', 'Natural Language Processing', 'A', 'moderate', 'Linguistics fundamentals of natural language processing (NLP), part of speech tagging, hidden Markov models, syntax and parsing, lexical semantics, compositional semantics, word sense disambiguation, machine translation. Additional topics such as sentiment analysis, text generation, and deep learning for NLP.');
INSERT INTO coursePrereqs(department, courseNum, prereqInfo)
VALUES ('EECS', '595', 'Senior standing');