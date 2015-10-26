'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ContactSchema = new Schema({
  name: String,
  email: {
        type: String,
        trim: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
  message: {
        type: String,
        required: 'Message is required'
    }
});

module.exports = mongoose.model('Contact', ContactSchema);

/* model Contact revient à dire en SQL qu'on a créée une table Contact */