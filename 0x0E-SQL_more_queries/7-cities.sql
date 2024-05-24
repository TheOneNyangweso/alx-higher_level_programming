-- script that creates the database hbtn_0d_usa and the table cities (in the database hbtn_0d_usa) on your MySQL server.
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
-- create table states in database created i.e. hbtn_0d_usa
USE hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS cities (
    PRIMARY KEY (id),
    id       INTEGER AUTO_INCREMENT,
    state_id INTEGER NOT NULL,
    name     VARCHAR(256) NOT NULL,
    FOREIGN KEY (state_id) REFERENCES states(id)
);