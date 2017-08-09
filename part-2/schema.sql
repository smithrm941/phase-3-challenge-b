DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

CREATE TABLE items (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  price NUMERIC NOT NULL,
  section VARCHAR(255) NOT NULL
);

CREATE TABLE shoppers (
  shopper_id SERIAL PRIMARY KEY,
  shopper_name TEXT NOT NULL
);

CREATE TABLE orders_shoppers (
  order_id SERIAL PRIMARY KEY,
  shopper_id INT REFERENCES shoppers(shopper_id)
);

CREATE TABLE orders_items (
  order_id INT REFERENCES orders_shoppers(order_id),
  product_id INT REFERENCES items(product_id)
);
