-- script that displays the number of records with id = 89 in the table first_table of the database hbtn_0c_0 in your MySQL server.
SELECT COUNT(id)
-- table to read data from
  FROM first_table
-- condition
 WHERE id = 89;