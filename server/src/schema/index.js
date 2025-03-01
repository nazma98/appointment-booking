const AppointmentSchemas = require('./appointment');
const AvailabilitySchemas = require('./availability');
const NotificationSchemas = require('./notification');
const SlotSchemas = require('./slot');
const UserSchemas = require('./user');

module.exports = {
    ...AppointmentSchemas,
    ...AvailabilitySchemas,
    ...NotificationSchemas,
    ...SlotSchemas,
    ...UserSchemas,
};

