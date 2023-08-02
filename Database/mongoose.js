const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bloggingapp')
.then(()=>{
    console.log('Database connection success!');
}).catch((err)=>{
    console.log('Database connection failed', err);
});