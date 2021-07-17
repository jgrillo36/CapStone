const express = require('express')
const router = express.Router()


const db = require('../models')


router.get('/users/all', async (req, res) => {  //first api call
    let records = await db.findAll()
    res.json({data: records})
})


//router.post()
//let records = await db.create({firstName: ''})




module.exports=router
