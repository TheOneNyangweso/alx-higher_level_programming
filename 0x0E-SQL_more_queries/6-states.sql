-- script that creates the database hbtn_0d_usa and the table states (in the database hbtn_0d_usa) on your MySQL server.
-- create database
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
-- make sure correct database is used 
USE hbtn_0d_usa;
-- create table states in database created i.e. hbtn_0d_usa
CREATE TABLE IF NOT EXISTS states (
    PRIMARY KEY (id),
    id   INTEGER AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL
);