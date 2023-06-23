import { createUser, getUsers } from "../controllers/userControllers";

const router = require("express").Router();

router.route("/").get(getUsers).post(createUser);

export default router;
