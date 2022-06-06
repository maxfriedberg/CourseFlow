Consider a table Sailors, where there is a B+ tree index on attribute Age, and the following query:
SELECT * FROM Sailors ORDER BY Age;
Furthermore, assume that the first level (root) of the B+ tree is kept in memory at all times, and that the B+ tree has the following properties:
●  total size of records = 12MB
●  size of record = 4KB
●  size of page = 64KB
●  both inner nodes and leaf nodes have order of 4
●  the fill factor of B+ tree nodes is 75%
●  the data record pages are kept full
Assume  1MB  =  1024KB.  Assume  only  the  root  node  is  in  memory  and  nothing  else  is saved in memory. Assume that we try to fit all records in the smallest number of pages possible and each node is in its own page. Assume Alternate 2 (as described in lecture) is used.
Answer the following questions:
2.1) What is the number of record pages and leaf nodes? What is the height of the B+ tree