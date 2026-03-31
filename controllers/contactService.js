const {Contact}=require('../models/contact')

const {create}=require('../repository/contactRepository')

const createContact=async (req, res) => 
{
    try
    {
    var {namePerson, email, comment}=req.body
          
    // await create({name:namePerson, email:email, message:comment, created:new Date()})
   
    }
    catch (error) {
        console.log(error);
        
    //    return res.status(500).json({error:'error interno'})

       res.json({status:200, notification:'success'})
    }   

    res.json({status:200, notification:'success'})
}

module.exports={createContact}