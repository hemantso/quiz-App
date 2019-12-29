const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Poll = require('../models/Poll.js'); 

//static data inserting in MongoDB

// const topics = [
//     "Should dogs be allowed to fly?",
//     "Should doors be shut at night?",
//     "Should developers use IDEs?",
//     "Should cars have four wheels?",
//     "Should humans be allowed to wear shoes?"
// ];
// Poll.deleteMany({})
//     .then(() => {
//         let polls = [];
//         for (let i = 0; i < 5; i++) {
//             if(i<3){
//             polls.push({
//                 topic: topics[i],
//                 choices: [
//                     {
//                         value: "Yes",
//                         votes: Math.round(Math.random() * 20)
//                     },
//                     {
//                         value: "No",
//                         votes: Math.round(Math.random() * 20)
//                     },
//                     {
//                         value: "None of Above",
//                         votes: Math.round(Math.random() * 20)
//                     },
//                     {
//                         value: "I really don't care",
//                         votes: Math.round(Math.random() * 20)
//                     }
//                 ]
//             });
//         }else{
//             polls.push({
//                 topic: topics[i],
//                 choices: [
//                     {
//                         value: "Yes",
//                         votes: Math.round(Math.random() * 20)
//                     },
//                     {
//                         value: "No",
//                         votes: Math.round(Math.random() * 20)
//                     }
//                 ]
//             });

//         }
//         }
//            return Poll.create(polls);
//     });
 
// router to get homepage
router.get('/', function (req, res, next) {
     Poll.find().exec((err, polls) => {
         
            res.render('home', { 
                style: 'home.css',
                polls: polls 
            });
        });
           
        
    });


// route to post data
router.post('/:pollId/vote', (req, res, next) => {
    const choice = req.body.choice;
    const identifier = `choices.${choice}.votes`;
        Poll.updateMany({_id: req.params.pollId}, {$inc: {[identifier]: 1}}, {}, (err, numberAffected) => {
            res.send('');
        });

    });


module.exports = router;