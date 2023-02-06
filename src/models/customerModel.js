const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    DOB: {
        type: Date,
        required: true
    },
    emailID: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        emum: ["ACTIVE", "INACTIVE"],
        required: true,
        default: "ACTIVE"
    }
}, { timestamps: true })

module.exports = mongoose.model('Customer', CustomerSchema)
