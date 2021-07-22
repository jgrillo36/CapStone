const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
app.use(helmet());
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
};
const port = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: false })); //scrape email and pass from request header
app.use(express.json());
app.use(cors(corsOptions))
app.get('/', (req, res) => {
    res.send('home page')
})


app.use(require('./routes/users'))
app.use(require('./routes/products'))

app.listen(port, () => console.log(`Server started on port ${port}`));

