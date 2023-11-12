-- Active: 1699627172081@@127.0.0.1@3306@ort_app
CREATE TABLE `customer`(
    `customer_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone_Number` INT NOT NULL,
    `address` VARCHAR(255) NOT NULL
);