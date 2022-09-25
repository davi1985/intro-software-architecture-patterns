// Example All in one place folder structure
import express from "express";
import { router as routesRabbits } from "./rabbits/routes/rabbits.routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/rabbits", routesRabbits);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
