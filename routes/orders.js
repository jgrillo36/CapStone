const express = require('express')
const router = express.Router()


const db = require('../models')

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.get('/orders/all', async (req, res) => {  //first api call
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

router.post('/orders/neworder', async (req, res) => {
    try{
        console.log(req.body)
      let {userId, transactionId, payment_method} = req.body;
    
      let result = await db.orders.create({userId, transactionId, payment_method, createdAt: new Date(), updatedAt: new Date()});
        console.log(result)

    //   res.redirect('/orders/all')

    }
    catch(error){
      res.send(error)
    }
  
  })

// GET /orders/:id
router.get('/orders/:id', async (req, res) => {
    try {
        let id = req.params.id; 
    
        let users = await db.orders.findByPk(id);
    
        res.json({data: orders})
    }
    catch(error){
        res.send('error')
      }
  })




module.exports = router
