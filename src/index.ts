import cors from "cors";
import * as dotenv from "dotenv";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import express, { Request, Response } from "express";
import { db } from "./db/drizzle";
import userRouter from "./routes/userRoute";
import { users } from "./schema/schema";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

migrate(db, { migrationsFolder: "./migrations" });

app.post("/", async (req: Request, res: Response) => {
  const { fullName, email } = req.body;
  console.log(req.body);
  try {
    const result = await db
      .insert(users)
      .values({ fullName: fullName, email: email });

    if (result.rowCount) {
      res.send({
        status: "success",
        message: "User added successfully",
        data: result,
      });
    } else {
      res.send({
        status: "failed",
        message: "Could not create user",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
