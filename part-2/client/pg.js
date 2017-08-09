const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  database: 'grocery_store',
  port: '5432'
});
client.connect();

module.exports = client;
