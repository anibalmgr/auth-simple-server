import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT;
const auth = process.env.AUTH;
const test = process.env.TEST;

app.use(cors({ origin: ["https://carmevidal.netlify.app", "https://carmevidal.uk"], credentials: true }));

app.get("/", (_req, res) => {
  res.send(`Hello, what are you doing there? This is a ${test}`);
});

app.post("/blog-auth", (req, res) => {
  if (req.body?.pass === auth) {
    return res.status(200).send(true);
  } else {
    return res.status(400).send(false);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
