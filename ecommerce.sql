CREATE DATABASE ecommerce;


USE ecommerce;



CREATE TABLE users(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100) UNIQUE,

password VARCHAR(100)

);



CREATE TABLE products(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

price INT

);



INSERT INTO products(name,price)

VALUES

('Laptop',50000),

('Mobile',20000),

('Headphones',2000);
