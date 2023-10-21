const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/dbconnect');
const initRoutes = require('./routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
            // process.env.CLLIENT_URL,
            // process.env.CLLIENT_URL_SHOW,
            
        // ],

        // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 200,
    }),
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('Hello World');
});
dbConnect();
initRoutes(app);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
