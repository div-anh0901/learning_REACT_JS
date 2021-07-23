const express = require('express');
require('dotenv').config({path : 'config.env'});
const app = express();
const port = process.env.PORT|| 5000;
const connectDB = require('./config/db');
const errorHandler= require('./middleware/error');
const cors = require("cors");

//connect MongoDb
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/private', require('./routes/privateRoute'));


//Error Handler (should be last pleace of middeware )

app.use(errorHandler);

app.get('/', (req, res) => res.send('Hello World!'));
const server = app.listen(port, () => console.log(`Example app listening on port 5000!`))

process.on("unhandledRejection", (err ,promise)=>{
    console.log(`Logged Error : ${err}`);
    server.close(()=> process.exit(1));
});
