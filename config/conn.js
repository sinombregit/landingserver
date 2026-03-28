const  Sequelize  = require('sequelize');

const db = new Sequelize(process.env.NAMEDB , process.env.USERDB, process.env.PASSWORDDB, {
  host: process.env.HOSTDB,
  dialect: 'mysql'
});

module.exports=db