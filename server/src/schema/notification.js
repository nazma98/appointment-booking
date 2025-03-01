const { z } = require('zod');
const { IDSchema, DateMixin } = require('./mixin');
const { AppointmentSchema } = require('./appointment');
const { UserSchema } = require('./user');

const NotificationSchema = z.object({
    ...IDSchema.shape,
    ...DateMixin.shape,
    appointmentDetails: AppointmentSchema,
    receiverUser: UserSchema,
    meetLink: z.string(),
});

module.exports = {
    NotificationSchema,
};

