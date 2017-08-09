const client = require('../client/pg.js');
const text = `SELECT orders_shoppers.order_id, SUM(items.price)
FROM orders_shoppers, orders_items, items
WHERE orders_shoppers.order_id = orders_items.order_id
AND orders_items.product_id = items.product_id AND orders_shoppers.shopper_id = $1
GROUP BY orders_shoppers.order_id`
const input = [process.argv[3]]

const shopperOrders = () => {client.query(text, input)
  .then(console.log(`order id    total cost`))
  .then(console.log('----------------------'))
  .then(res =>
    res.rows.map(x => {
    const orderID = x.order_id;
    const sum = x.sum;
    console.log(`${orderID}           ${sum}`)
  }))
  .catch(err => console.log(err))};

module.exports = shopperOrders;
