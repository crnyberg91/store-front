DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE product_table (
    PRIMARY KEY
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL,
    quantity INTEGER NOT NULL
    -- img
)

INSERT INTO product_table (item_name, department, price, quantity)
VALUES
("Samsung Galaxy S10", "electronics", 799, 10),
("Nintendo Switch", "electronics", 299 8),
("Sony Playstation 4", "electronics", 399 4),
("Microsoft Xbox One", "electronics", 399 15),
("Nintendo Gamecube", "electronics", 1000 1),
("Bataleon Evil Twin", "outdoors", 299 6),
("Bataleon Whatever", "outdoors", 599 3),
("Salalom Villain", "outdoors", 499 6),
("Capita Defenders of Awesome", "outdoors", 299 4),
("Capita Board of Death", "outdoors", 299 6),
("2018 Honda Civic Touring", "automotive", 35595, 30),
("2018 Chevrolet Camaro SS", "automotive", 45120, 50),
("2019 Ford Transit-350", "automotive", 39660, 50),
("2018 Toyota 86 GT", "automotive", 30280, 50)








