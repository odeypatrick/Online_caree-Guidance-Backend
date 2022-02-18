const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: String,
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report'
        }
    ],
    approved: false
})

module.exports = mongoose.model("user", userSchema);