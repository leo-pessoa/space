const mysql = require('mysql2/promise');
const config = require('../config.js');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  console.log(results);

  return results;
}

module.exports = { query }