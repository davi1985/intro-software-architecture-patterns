import { Request, Response } from "express";

import {
  addItem,
  deleteItem,
  editId,
  getAllItems,
  getItem,
} from "../models/rabbits.model";

export const listRabbits = (req: Request, res: Response) => {
  try {
    const rabbits = getAllItems();

    return res.status(200).json(rabbits);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getRabbit = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const rabbit = getItem(parseInt(id));

    return res.status(200).json(rabbit);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editRabbit = (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    const { name } = req.body;

    let idParsed = parseInt(id);

    const rabbitUpdated = editId(Number(id), { id: idParsed, name });

    return res.status(200).json(rabbitUpdated);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addRabbit = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const id = getAllItems()!.length + 1;

    const rabbit = addItem({ id, name });

    return res.status(201).json(rabbit);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteRabbit = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    deleteItem(Number(id));

    return res.status(200).json();
  } catch (err) {
    res.status(500).send(err);
  }
};
