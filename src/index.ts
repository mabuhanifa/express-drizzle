import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
