import asyncHandler from 'express-async-handler';

import { slotServices } from '../services/index.js';

export const createSlot = asyncHandler(async (req, res) => {
  const slotData = await slotServices.createSlot(req.body);
  res.status(201).send(slotData);
});

export const getSlot = asyncHandler(async (req, res) => {
  const slots = await slotServices.getSlot();
  res.json(slots);
});

export const updateSlot = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedSlot = await slotServices.updateSlot(id, req.body);
  res.status(201).json(updatedSlot);
});

export const deleteSlot = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await slotServices.deleteSlot(id);
  res.status(200).json({ message: `Slot with id ${id} is deleted successfully` });
});

