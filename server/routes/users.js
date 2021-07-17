const express = require('express')
const router = express.Router()


const db = require('../models')


router.get('/users/all', async (req, res) => {  //first api call
    let records = await db.findAll()
    res.json({data: records})
})





module.exports=router
