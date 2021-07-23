const mongoose = require('mongoose');


const connectDB = async()=>{
     await mongoose.connect(process.env.MONGO_URL,{
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: true
     });

     console.log('MonggoDB Connected!!!');
}


module.exports = connectDB;