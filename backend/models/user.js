const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    organization_name: {
        type: String
    },
    organization_id: {
        type: String
    },
    designation: {
        type: String
    },
    birthdate: {
        type: Date
    },
    city: {
        type: String
    },
    pincode: {
        type: String
    }
    
});

module.exports = mongoose.model("user", userSchema);