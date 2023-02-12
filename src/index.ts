import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
const auth = process.env.AUTH;

app.all("/", (req, res) =>
  console.log({ headers: req.headers, res: res.statusMessage })
);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.get("/", (_req, res) => {
  res.send("Hello, what are you doing here?");
});

app.post("/blog-auth", (req, res) => {
  console.log(req);

  if (req.body?.auth === auth) {
    return res.status(200).send(true);
  } else {
    return res.status(400).send(false);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
