import express from 'express';
import mongoose from 'mongoose';

import './config.js'

const app = express(); 
const URI = process.env.MONGOURI
const PORT = process.env.PORT || 3600;
app.use(express.json()); 

app.get('/', () => {
    express.send("server is working"); 
});

mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true}); 
mongoose.set('strictQuery', true);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('db connection failed');
}); 

app.listen(PORT, (err) => {
    if(err) {
        console.log("there is an error", err);
    } else {
        console.log("the server is listening on port ", PORT)
    }
})