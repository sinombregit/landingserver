const { Contact } =require('../models/contact') 
const Sequelize = require('sequelize')

const create = async (contact) => 
{      
  const person = await Contact.create(contact);
  
  console.log('Usuario creado:', person);     
}

module.exports={ create}