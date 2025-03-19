import { z } from 'zod';
import { DateMixin, IDSchema } from './mixin';

export const slotSchema = z.object({
    ...IDSchema.shape,
    ...DateMixin.shape,
    date: z
    .string()
    .datetime({ message: 'Invalid datetime string! Must be UTC.' }),
    duration: z.string({ message: 'Duration must be in minutes i.e. 50m'}),
});