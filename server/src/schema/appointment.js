const { z } = require('zod');
const { DateMixin, IDSchema } = require('./mixin');
const { SlotSchema } = require('./slot');
const { UserSchema } = require('./user');

const AppointmentSchema = z.object({
    ...IDSchema.shape,
    ...DateMixin.shape,
    title: z.string(),
    description: z.string.optional(),
    createdBy: UserSchema,
    slot: SlotSchema,
    status: z.array([z.string()]),
});

module.exports = {
    AppointmentSchema,
};

