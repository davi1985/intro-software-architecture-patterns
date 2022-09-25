import express, { Request, Response } from "express";

import { getAllItems, getItem } from "../models/rabbits.model";

const router = express.Router();

router.get("", (req: Request, res: Response) => {
  try {
    const rabbits = getAllItems();

    return res.render("rabbits", { rabbits });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", (req: Request, res: Response) => {
  try {
    const rabbit = getItem(parseInt(req.params.id));

    return res.render("rabbit", { rabbit });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
