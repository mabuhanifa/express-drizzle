import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { users } from "../schema/schema";

const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await db.select().from(users);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

const createUser = async (req: Request, res: Response) => {
  const { fullName, email } = req.body;
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
};

export { createUser, getUsers };
