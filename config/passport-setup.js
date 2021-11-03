const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys=require('./keys');
const User = require('../models/user-models.js');

passport.use(
    new GoogleStrategy({
    //options for the strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: 'http://localhost:5000/auth/google/redirect',
},async (accessToken,refreshToken,profile,done)=>{
    //passport callback function
    console.log('passport callback function fired:');
    console.log(profile);
    await new User({
        username: profile.displayName,
        googleId: profile.id
    }).save().then((newUser)=>{
        console.log('new User created'+ newUser);
    }).catch((err)=>{
        console.log(err);
    }
    );
})
);