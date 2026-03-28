// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');

// const Contact = sequelize.define('contact', {
//   name: DataTypes.STRING,
//   email: DataTypes.STRING,
//     message: DataTypes.STRING
// })
const { DataTypes ,Sequelize } = require('sequelize');
const db = require("../config/conn")

const Contact = db.define('contact', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false    
  },
  message: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created:{
    type: DataTypes.DATE
  }
}, {
     freezeTableName: true,
     createdAt:false,
     updatedAt:false
})

// Exporta el modelo para usarlo en otros archivos
module.exports = { Contact}