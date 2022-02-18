const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    projectTitle: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

