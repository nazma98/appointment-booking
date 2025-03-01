const mongoose = require('mongoose');
const { User } = require('./user');

const availabilitySchema = new mongoose.Schema(
    {
        executive: { type: User, required: true },
        availableDays: { type: [String], required: true },
        availableTime: { type: [String], required: true },
        breakTime: [String],
    },
    {
        timestamps: true,
    }
);

const Availability = mongoose.model('Availability', availabilitySchema);

exports.Availability = Availability;

