\c grocery_store

/*replace FULL/PATH/TO/groceries.csv with actual full path to groceries.csv*/
COPY items (product_name, price, section) FROM 'FULL/PATH/TO/groceries.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers(shopper_name) VALUES
  ('Rhonda Smith'),
  ('Tom Solomon'),
  ('Dick Solomon'),
  ('Harry Solomon'),
  ('Sally Solomon');

INSERT INTO orders_shoppers(shopper_id) VALUES
  (1),
  (2),
  (1),
  (4),
  (4);

INSERT INTO orders_items(order_id, product_id) VALUES
  (1, 2),
  (1, 9),
  (1, 24),
  (2, 3),
  (2, 15),
  (2, 21),
  (3, 34),
  (4, 30),
  (4, 32),
  (5, 40),
  (5, 40),
  (5, 40);
