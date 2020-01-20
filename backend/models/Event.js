// Event.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },  
    date: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;