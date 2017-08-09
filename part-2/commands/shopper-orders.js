const client = require('../client/pg.js');
const text = "SELECT orders_shoppers.order_id, orders_items.product_id, price FROM orders_shoppers, orders_items, items WHERE orders_shoppers.order_id = orders_items.order_id AND orders_items.product_id = items.product_id AND orders_shoppers.shopper_id = $1;"
const input = [process.argv[2]]

const shopperOrders = () => {client.query("SELECT orders_shoppers.order_id, orders_items.product_id, price FROM orders_shoppers, orders_items, items WHERE orders_shoppers.order_id = orders_items.order_id AND orders_items.product_id = items.product_id AND orders_shoppers.shopper_id = $1;", [process.argv[2]])
  .then(console.log(`order id    total cost`))
  .then(console.log('----------------------'))
  .then(res =>
    res.rows.map(x => {
    const orderID = x.order_id;
    const price = x.price;
    console.log(`${orderID}           ${price}`)
  }))
  .catch(err => console.log(err))};
shopperOrders(input)
module.exports = shopperOrders;
