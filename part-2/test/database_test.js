const client = require('../client/pg.js');
const productList = require('../test-commands/product-list_test');
const realShoppers = require('../test-commands/real-shoppers_test');
const shopperOrders = require('../test-commands/shopper-orders_test');
const expect = require ('chai').expect


describe('productList', function(){
  it.only('should return all items in a store section', function(done) {
    return productList()
    expect(res.rows).to.be.an('array')
    .then(done());
  })
})

describe('real-shoppers', () => {
  it('should return the names and number of orders of shoppers with orders', () => {
    return realShoppers()
    expect(res.rows).to.be.an('array')
    .then(done());
  })
})


describe('shopper-orders', () => {
  it('should return the order number and total price of a particular shopper\'s orders', () => {
    return shopperOrders()
    expect(res.rows).to.be.an('array')
    .then(done());
  })
})
