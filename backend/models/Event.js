// Event.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// database model for an event //
const EventSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true,
        name:{
            type: Object,
            required: true,
        },
        latitude:{
            type: Object,
            required: true,
        },
        longitude:{
            type: Object,
            required: true,
        }
    },
    creator: {
        type: Object,
        required: true,
        name:{
            type: Object,
            required: true,
        },
        avatarURL:{
            type: Object,
            required: true,
        }
    },
    guests:[],
    comments:[]  
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;