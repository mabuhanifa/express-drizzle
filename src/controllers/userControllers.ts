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

export { getUsers };
