CREATE DATABASE tasksdb;

use tasksdb;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(200) UNIQUE NOT NULL,
  `password` varchar(200) NOT NULL
);

CREATE TABLE `proj` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `project_id` int
);

CREATE TABLE `projects` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `priority` int,
  `description` varchar(300),
  `done` boolean NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `tasks` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` varchar(300),
  `done` boolean NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `project_id` int,
);

ALTER TABLE `proj` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `proj` ADD FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

ALTER TABLE `tasks` ADD FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);
