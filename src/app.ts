// Example All in one place folder structure
import express, { Request, Response } from "express";

const app = express();
const port = 3333;

const db = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Joe" },
  { id: 4, name: "Jack" },
  { id: 5, name: "Jill" },
  { id: 6, name: "Jak" },
  { id: 7, name: "Jana" },
  { id: 8, name: "Jan" },
  { id: 9, name: "Jas" },
  { id: 10, name: "Jasmine" },
];

app.get("/rabbits", (req: Request, res: Response) => res.json(db));

app.get("/rabbits/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json(db[Number(id)]);
});

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
