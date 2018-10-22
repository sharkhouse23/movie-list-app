-- create database (drop DB if it already exists)
-- create table 
  -- make sure auto increment & primary key is added to id key
  -- add data type to each key

DROP DATABASE if exists movie_list;
CREATE DATABASE movie_list;

USE movie_list;

CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(100),
);
