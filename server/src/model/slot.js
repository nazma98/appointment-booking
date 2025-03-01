const mongoose = require('mongoose');
const { User } = require('./user');

const slotSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        duration: { type: String, required: true },
        appointmentDate: { type: Date, required: true },
        executive: { type: User, required: true },
        availabilityStatus: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
);

const Slot = mongoose.model('Slot', slotSchema);

exports.Slot = Slot;

