const Poll = require('./Poll.js');
const mongoose = require('mongoose');

function connect(){
    return mongoose.connect('mongodb+srv://hemant:happy@cluster0-blez1.mongodb.net/quiz?retryWrites=true&w=majority',{
        useNewUrlParser: true
    });
}
 module.exports ={
     models:{
         poll: Poll
        
    },
    connect: connect
};