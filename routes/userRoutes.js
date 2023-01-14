import express from "express";

const router = express.Router();

import { getUserData } from "../controllers/user.js";

router.get("/user", getUserData);


export default router;
