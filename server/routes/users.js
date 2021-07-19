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



  //router.post()
//let records = await db.create({firstName: ''})

router.post('/users/newuser', async (req, res) => {
    try{
        console.log(req.body)
      let {email, firstName, lastName, password, phoneNumber} = req.body;
      const passwordEncrypted = bcrypt.hashSync(password, 8)
    
      let result = await db.users.create({firstName, lastName, email, phoneNumber, password:passwordEncrypted, createdAt: new Date(), updatedAt: new Date()});
        console.log(result)

    //   //let records = await db.create({firstName: ''})
    //   let records = await db.users.findAll();
    //   res.json({data: records})

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
