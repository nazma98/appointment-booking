const mongoose = require('mongoose');
const { Appointment } = require('./appointment');
const { User } = require('./user');

const notificationSchema = new mongoose.Schema(
    {
        appointmentDetails: { type: Appointment, required: true },
        receiverUser: { type: User, required: true },
        meetLink: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Notification = mongoose.model('Notification', notificationSchema);

exports.Notification = Notification;

