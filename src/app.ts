import express, { Request, Response } from "express";

const app = express();
const port = 3333;

app.get("/hello", (req: Request, res: Response) =>
  res.json({ message: "Hello Dev" })
);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
