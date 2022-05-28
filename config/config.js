require("dotenv").config();

module.exports = {
  development: {
    // username: "rahad",
    // password: "testing",
    // database: "portfolio",
    // host: "127.0.0.1",
    // dialect: "postgres",
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_PASS,
    database: process.env.DEV_DATABASE,
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    // username: "root",
    // password: null,
    // database: "database_test",
    // host: "127.0.0.1",
    // dialect: "mysql",
    username: process.env.database_dev_username,
    password: process.env.database_dev_password,
    database: process.env.database_dev_database,
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    // username: "root",
    // password: null,
    // database: "database_production",
    // host: "127.0.0.1",
    // dialect: "mysql",
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_PASS,
    database: process.env.DEV_DATABASE,
    host: "localhost",
    dialect: "postgres",
  },
};

/*

const fs = require('fs');

module.exports = {
  development: {
    username: 'database_dev_username',
    password: 'database_dev_password',
    database: 'database_dev_database',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
      }
    }
  }
};

*/
