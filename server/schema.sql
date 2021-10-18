CREATE DATABASE cows;

USE cows;

CREATE TABLE cows (

  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  description varchar(300),
  PRIMARY KEY (id)

)