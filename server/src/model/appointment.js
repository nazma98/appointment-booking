const mongoosee = require('mongoose');
const { User } = require('./user');
const { Slot } = require('./slot');

const appointmentSchema = new mongoosee.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        createdBy: { type: User, required: true },
        slot: { type: Slot, required: true },
        status: { type: [String], required: true },
    },
    {
        timestamps: true,
    });

const Appointment = mongoosee.model('Appointment', appointmentSchema);

exports.Appointment = Appointment;


