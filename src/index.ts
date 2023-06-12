import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { db } from "./db/drizzle";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", async (req, res) => {
  try {
    const user = db;
    res.send(db);
  } catch (error) {
    res.send(error);
  }
});

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
