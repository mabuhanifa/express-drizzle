import { getUsers } from "../controllers/userControllers";

const router = require("express").Router();

router.route("/").get(getUsers);

export default router;
