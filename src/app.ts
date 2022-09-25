import path from "path";
import express from "express";
import rabbitsController from "./rabbits/controllers/rabbits.controller";

const app = express();
const port = 3333;

// Ejs config
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.set("views", path.join(__dirname, "./rabbits/views"));

app.use("/rabbits", rabbitsController);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
