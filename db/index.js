const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config.json')[env];

// const { Op } = Sequelize;
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
    // console.log(model); //It list all the models
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

// sequelize.sync(); //??? What is this?

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
// sequelize.close();
