const { z } = require('zod');
const { IDSchema, DateMixin } = require('./mixin');
const { UserSchema } = require('./user');

const SlotSchema = z.object({
    ...IDSchema.shape,
    ...DateMixin.shape,
    title: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    duration: z.string(),
    appointmentDate: z.date(),
    executive: UserSchema,
    availabilityStatus: z.boolean().default(false),
});

module.exports = {
    SlotSchema,
};

