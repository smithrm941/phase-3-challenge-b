const productList = require('./commands/product-list');
const realShoppers = require('./commands/real-shoppers');
const shopperOrders = require('./commands/shopper-orders');

switch(process.argv[2]) {
  case 'product-list':
    productList()
    break;
  case 'shopper-orders':
    shopperOrders()
    break;
  case 'real-shoppers':
    realShoppers()//probably will take argument
    break;
  default:
    console.log('Please enter a command')
    console.log('Commands are product-list, shopper-orders, and real-shoppers')
}
