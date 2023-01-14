import express from "express";

const router = express.Router();

import { getUserData, getUserRepositories } from "../controllers/user.js";

router.get("/user", getUserData);
router.get("/repos", getUserRepositories);

export default router;
