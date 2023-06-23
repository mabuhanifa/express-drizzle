import cors from "cors";
import * as dotenv from "dotenv";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import express from "express";
import { db } from "./db/drizzle";
import userRouter from "./routes/userRoute";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

migrate(db, { migrationsFolder: "./migrations" });

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
