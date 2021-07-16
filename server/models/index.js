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
