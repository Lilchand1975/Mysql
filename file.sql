CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, 'camera', 'electronics', 100, 45), (2, 'pen', 'stationery', 5, 200), (3, 'shirt', 'hosiery', 10,100),
(4, 'nike', 'shoes', 45,50), (5, 'fan', 'electronics', 60, 250), (6, 'watch', 'jewelery', 50, 25),
(7, 'scissor', 'stationery', 20,15), (8, 'pant', 'hosiery', 15,300), (9, 'earphone', 'electronics', 30,200),
(10, 'mario', 'toys', 40,150);

SELECT * FROM products; 
