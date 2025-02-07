const mongoose = require('mongoose');

const medicalAidSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    location: {
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

module.exports = mongoose.model('MedicalAid', medicalAidSchema);
