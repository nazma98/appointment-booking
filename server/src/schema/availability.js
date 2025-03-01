const { z } = require('zod');
const { IDSchema, DateMixin } = require('./mixin');
const { UserSchema } = require('./user');

const AvailabilitySchema = z.object({
    ...IDSchema.shape,
    ...DateMixin.shape,
    executive: UserSchema,
    availableDays: z.array([z.string()]),
    availableTime: z.array([z.string()]),
    breakTime: z.array([z.string()]),
});

module.exports = {
    AvailabilitySchema,
};

