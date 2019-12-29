let mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    topic: String,
    choices: [
        {
            value: String,
            votes: Number
        }
    ]
  },
  {
      collection: 'poll'
  
  });
const Poll = mongoose.model('Poll', pollSchema);
  
module.exports = Poll;