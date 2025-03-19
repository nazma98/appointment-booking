import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: [true, 'Date is required'],
        },
        duration: {
            type: String,
            required: [true, 'Duration is required'],
        },
    },
    {
        timestamps: true,
    });

const Slot = mongoose.model('Slot', slotSchema);

export default Slot;