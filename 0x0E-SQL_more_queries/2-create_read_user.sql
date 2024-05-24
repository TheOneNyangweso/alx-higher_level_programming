-- script that creates the database hbtn_0d_2 and the user user_0d_2.
-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
-- Create user if he/she doesn't exist
CREATE USER IF NOT EXISTS 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d_2_pwd';
--  grant privileges
GRANT SELECT
   ON hbtn_0d_2.*
   TO 'user_0d_2'@'localhost'
 WITH GRANT OPTION;