const client = require('../client/pg.js');
const text = 'SELECT * FROM items WHERE section = $1'
const input = [process.argv[3]]

const productList = () => {client.query(text, input)
  .then(console.log(`name                      section`))
  .then(console.log('---------------------------------'))
  .then(res => res.rows.map(x => {
    const name = x.product_name;
    const section = x.section;
    console.log(`${name}              ${section}`)
  }))
  .catch(err => console.log(err))};

module.exports = productList;
