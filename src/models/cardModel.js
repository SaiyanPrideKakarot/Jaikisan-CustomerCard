const mongoose = require('mongoose')

const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types

const CardSchema = new Schema({
    cardNumber: {
        type: String,
        required: true,
        unique: true
    },
    cardType: {
        type: String,
        required: true,
        enum: ["REGULAR", "SPECIAL"]
    },
    customerName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    },
    vision: {
        type: String,
        required: true
    },
    customerID: {
        type: ObjectId,
        required: true,
        ref: 'Customer'
    }
}, { timestamps: true })

module.exports = mongoose.model('Card', CardSchema)
