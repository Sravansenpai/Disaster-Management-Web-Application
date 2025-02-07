const mongoose = require('mongoose');

const transportAidSchema = new mongoose.Schema({
    requestType: {
        type: String,
        enum: ['evacuation', 'medical-transport', 'supply-delivery', 'other'],
        required: true
    },
    pickupLocation: {
        type: String,
        required: true
    },
    dropLocation: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    numberOfPeople: {
        type: Number,
        required: true,
        min: 1
    },
    urgency: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical'],
        required: true
    },
    additionalInfo: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TransportAid', transportAidSchema);
