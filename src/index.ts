import cors from "cors";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import { db } from "./db/drizzle";
import { users } from "./schema/schema";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const user = db;
    res.send(db);
  } catch (error) {
    res.send(error);
  }
});

app.post("/", async (req: Request, res: Response) => {
  const { fullName, email } = req.body;
  console.log(req.body);
  try {
    const result = await db
      .insert(users)
      .values({ fullName: fullName, email: email })
      .returning();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
