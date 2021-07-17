const express = require("express");
const app = express();
const helmet = require("helmet");
app.use(helmet());
const port = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: false })); //scrape email and pass from request header
app.use(express.json());


app.use(require('./routes/users'))

app.listen(port, () => console.log(`Server started on port ${port}`));

