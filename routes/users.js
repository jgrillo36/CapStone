const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const passport = require('passport');
const requireLogin = passport.authenticate("local", { session: false });
const requireJwt = passport.authenticate("jwt", { session: false });


const db = require('../models')

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());
require("../auth");

const createToken = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, "jibberish");
};

router.get('/users/all', async (req, res) => {  //first api call
    try {
    let records = await db.findAll()
    res.json({data: records})
    }
    catch(error){
        res.send('error')
    }
})

router.post('/users/login', requireLogin, async (req, res)=> {
  res.json({ token: createToken(req.user), currentUser: req.user });
})




  //router.post()
//let records = await db.create({firstName: ''})

router.post('/users/newuser', async (req, res) => {
    try{
      let {email, firstName, lastName, password, phoneNumber} = req.body;
      const passwordEncrypted = bcrypt.hashSync(password, 8)
    
      let result = await db.users.create({firstName, lastName, email, phoneNumber, password:passwordEncrypted, createdAt: new Date(), updatedAt: new Date()});
        console.log('return', result.dataValues)
        const jwtToken = createToken(result.dataValues)
        console.log('jwtToken', jwtToken)
        res.json({token: jwtToken})
        // return result.users.dataValues
        

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
