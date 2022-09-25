import express from "express";
import {
  getRabbit,
  listRabbits,
  editRabbit,
  addRabbit,
  deleteRabbit,
} from "../controllers/rabbits.controller";

const router = express.Router();

router.get("/", listRabbits);
router.get("/:id", getRabbit);
router.post("/", addRabbit);
router.put("/:id", editRabbit);
router.delete("/:id", deleteRabbit);

export { router };
