const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add the name"],
        },
        type: {
            type: String,
            required: [true, "Please add the device type"],
        },
        ip: {
            type: String,
            required: [true, "Please add the device ip address"],
        },
        location: {
            type: String,
            required: [true, "Please add the device location"],
        },
        description: {
            type: String,
        },
        responseTime: {
            type: String,
        },
        status: {
            type: String,
            enum: ['up', 'down', 'unknown'],
            default: 'unknown',
        },
        mac: {
            type: String,
            unique: true,
        },
        sshUsername: {
            type: String,
            default: "admin",
        },
        sshPassword: {
            type: String,
            default: "admin", 
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Device", deviceSchema);