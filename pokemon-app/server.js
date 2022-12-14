///npm i method overide 
const express = require('express');
const mongoose = require('mongoose');


const app = express();

require('dotenv').config();
const port = process.env.PORT || 3003;

const pokemonData=require('./utilities/pokemonData');
//connect mongoose database
//DB connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open',()=>{
    console.log('Connected to mongo');
});

//middleware
app.use(express.urlencoded({extended:false}));


//set views
app.set('view engine','jsx');

//initialize engine
app.engine('jsx',require('express-react-views').createEngine());

//data
const Pokemon = require("./models/Pokemon");

//seed route
app.get('/pokemon/seed', async (req,res)=>{
    //Comment the line below if you don't want to delete your whole entire collection
    await Pokemon.deleteMany({});//not working for right now
    //Create a list of pokemon on our database
    await Pokemon.create(pokemonData);
    res.redirect('/pokemon');

});

//routes
//index
app.get('/pokemon',(req,res)=>{
    Pokemon.find({},(err, allPoke)=>{
        res.render('Index',{pokemon:allPoke});
    });
});

//new
app.get('/pokemon/new',(req,res)=>{
    res.render('New');
});

//post 
app.post('/pokemon', (req,res)=>{
    Pokemon.create(req.body,(err, createdPoke)=>{
        res.redirect('/pokemon');
    });
});

//show
app.get('/pokemon/:id',(req,res)=>{
    Pokemon.findById(req.params.id,(err,foundPoke)=>{
        res.render('Show',{pokemon : foundPoke});
    });

});





//port
app.listen(port,()=>{
    console.log('Listening on port ', port);
});