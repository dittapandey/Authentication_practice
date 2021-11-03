const express = require('express');
const authRoutes=require('./routes/auth.routes');
const app=express();
const passportSetup= require('./config/passport-setup');
const mongoose= require('mongoose');
const keys= require('./config/keys');
const PORT = process.env.PORT || 5000;

//EJS
app.set('view engine','ejs');

//connect to mongo db
mongoose.connect(keys.mongodb.dbURL,()=>{
    console.log('connected to mongodb');
}
);

//set up routes
app.use('/auth', authRoutes);

//home route
app.get('/',(req,res)=>{
    res.render('home');
});





app.listen(PORT, console.log(`Server started on port ${PORT}`));