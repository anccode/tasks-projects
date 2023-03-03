--create table tasks

CREATE TABLE tasks(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  done BOOLEAN NOT NULL DEFAULT 0,
  createdAt timestamp NOT NULL default CURRENT_TIMESTAMP
);
