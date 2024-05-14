const express = require('express');
const connectDB = require("./db/connectToDb.js");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require('./router/authRoutes.js');
const toDoRouter = require('./router/todoRoutes.js');

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello <hr> </h1>");
})

// Database Connection
connectDB();

// middleware 
// app.use(cors({
//     origin: 'http://127.0.0.1:5500',
//     credentials: true
// }));

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/todo', (res, req, next) => {
    console.log('recieved1')
    next();
}, toDoRouter);
app.use('/api', authRouter);

// PORT activation
const PORT = process.env.PORT;
app.listen(PORT, (port, err) => {
    console.log("Server Live ", PORT);
})
