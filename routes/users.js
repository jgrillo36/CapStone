const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')


const db = require('../models')

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.get('/users/all', async (req, res) => {  //first api call
    try {
    let records = await db.findAll()
    res.json({data: records})
    }
    catch(error){
        res.send('error')
    }
})

router.post('/users/login', async (req, res)=> {
  let {email, password} = req.body;
  try{
      
      const user = await db.users.findAll({
        where: {
          email: email,   
        },
      });
  
      const hashPassword = await bcrypt.compare(password, user[0].dataValues.password);
      
      if (user[0].dataValues && hashPassword){
        const userProfile = await db.users.findByPk(user[0].dataValues.id)
        res.json(userProfile)
      }else {
        res.json({message: 'email or password is incorrect'})
      }
      
  }
  catch(error){
    res.send('no user identified')
  }
})




  //router.post()
//let records = await db.create({firstName: ''})

router.post('/users/newuser', async (req, res) => {
    try{
        console.log(req.body)
      let {email, firstName, lastName, password, phoneNumber} = req.body;
      const passwordEncrypted = bcrypt.hashSync(password, 8)
    
      let result = await db.users.create({firstName, lastName, email, phoneNumber, password:passwordEncrypted, createdAt: new Date(), updatedAt: new Date()});
        console.log('return', result.users.dataValues)
        return result.users.dataValues

    //   res.redirect('/users')

    }
    catch(error){
      res.send(error)
    }
  
  })

// GET /users/:id
router.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id; 
    
        let users = await db.users.findByPk(id);
    
        res.json({data: users})
    }
    catch(error){
        res.send('error')
      }
  })




module.exports = router
