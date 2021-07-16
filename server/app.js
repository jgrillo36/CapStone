const express = require('express');
const app = express();
const Port = 3001

app.use(require('./routes/authentication'));




app.listen(Port, ()=>{
    console.log(`listening on port${Port}`);

})
// const jwt = require('jwt-simple');



// let userInfo = {
//     id: '12345',
//     userName : 'Veronica', 
//     email: 'me@me.com'
// }

// const token = (user) => {

//     let timestamp = new Date().getTime();

//     return jwt.encode({sub: user.id, name: user.userName, iat: timestamp}, "lasdkj;flsajl;dfjal;sdjfl;askjdfl;ksajdl;kfs")
// }

// let tokenID = token(userInfo);

// console.log(tokenID);

// console.log(jwt.decode(tokenID, "lasdkj;flsajl;dfjal;sdjfl;askjdfl;ksajdl;kfs"));