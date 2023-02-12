import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
const auth = process.env.AUTH;

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello, what are you doing here?");
});

app.post("/post", (req, res) => {
  if (req.body.auth === auth) {
    res.status(200).send(true);
  } else {
    res.status(400).send(false);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
