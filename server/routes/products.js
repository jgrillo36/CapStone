const express = require('express')
const router = express.Router()



const db = require('../models')

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.get('/products/all', async (req, res) => {  //first api call
    try {
    let records = await db.products.findAll()
    
    res.json({data: records})
    }
    catch(error){
        res.send(error)
    }
})



router.get('/products/:id', async (req, res) => {
    try {
        let id = req.params.id; 
    
        let users = await db.products.findByPk(id);
    
        res.json({data: users})
    }
    catch(error){
        res.send('error')
      }
  })



module.exports = router