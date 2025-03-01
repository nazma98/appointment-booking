const { z } = require('zod');
const { IDSchema, DateMixin } = require('./mixin');
const { AppointmentSchema } = require('./appointment');

const UserSchema = z.object({
    ...IDSchema.shape,
    ...DateMixin.shape,
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    contact: z.string(),
    password: z.string(),
    role: z.string(),
    appointments: z.array([AppointmentSchema]).optional(),
});

module.exports = {
    UserSchema,
};

