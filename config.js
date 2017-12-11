module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db.development.sqlite',
    operatorsAliases: false,
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    operatorsAliases: false,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    operatorsAliases: false,
  },
};
