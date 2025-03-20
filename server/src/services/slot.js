import { Slot } from '../models/index.js';

export const createSlot = async (slotPayload) => {
    const slot = new Slot(slotPayload);
    await slot.save();
    return slot;
};

export const getSlot = async() => {
    const slots = await Slot.find({ deleted: false });
    return slots;
};

export const updateSlot = async(id, payload) => {
    return await Slot.findOneAndUpdate({ _id: id }, payload);
};

export const deleteSlot = async(id) => {
    return await Slot.findOneAndUpdate(
        {_id: id},
        { deleted: true, deletedAt: new Date()},
    );
};