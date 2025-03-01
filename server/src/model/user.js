const mongoose = require('mongoose');
const { AppointmentSchema } = require('../schema');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        contact: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        appointments: [AppointmentSchema],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

exports.User = User;

