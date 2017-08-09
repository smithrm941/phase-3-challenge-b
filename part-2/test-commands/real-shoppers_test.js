const client = require('../client/pg.js');
const text = `SELECT shoppers.shopper_name, COUNT(orders_shoppers.order_id)
  FROM shoppers, orders_shoppers
  WHERE orders_shoppers.shopper_id = shoppers.shopper_id
  GROUP BY shoppers.shopper_name
  ORDER BY count`

const realShoppers = () => {client.query(text)
  .then(console.log(`shopper            num. of orders`))
  .then(console.log('---------------------------------'))
  .then(res => res.rows.map(x => {
    const name = x.shopper_name;
    const orderCount = x.count;
    console.log(`${name}         ${orderCount}`)
  }))
  .catch(err => console.log(err))};

module.exports = realShoppers;
