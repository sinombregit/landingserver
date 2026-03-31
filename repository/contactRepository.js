const { Contact } =require('../models/contact') 
const Sequelize = require('sequelize')

const create = async (contact) => 
{      
  const person = await Contact.create(contact);       
}

module.exports={ create}