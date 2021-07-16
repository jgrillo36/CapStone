const express = require('express');
const router = express.Router();
// db
const db = require('../models');
// body parser and scrape emai; and password form request
router.use(express.urlencoded({extended:false}))
router.use(express.json())


// encryption
const bcrypt = require('bcryptjs'); 


// jwt
const jwt = require('jwt-simple');

// passport
const passport = require('passport');


// this funtion returns a jwt
const token = (params) => {
    
}



router.get('/',(req,res) => {
    res.send('home page')




// signing up or logging in with credentials

} )
router.post('/login',(req, res) => {

})
// new resistration,someone is signing up for your site
router.post('/register', (req, res) => {
    // collect info
    // body-parser to parse off header
    // email, password
    // add to database -if email already exists,then don't insert
    //  on success send back a json web token
    // place new created db record id on token

})
module.exports = router;
