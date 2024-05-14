const express = require('express');
const connectDB = require("./db/connectToDb.js");
const morgan = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello <hr> </h1>");
})

// connectDB();

// middleware 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// PORT activation
const PORT = process.env.PORT;
app.listen(PORT, (port, err) => {
    console.log("Server Live ", PORT);
})
