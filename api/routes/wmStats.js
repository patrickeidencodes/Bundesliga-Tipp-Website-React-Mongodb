import express from "express";
import { createStats, updateStats, getStats, getAllStats } from "../controllers/wm.js";

const router = express.Router();

//CREATE STATS
router.post("/create/stats", createStats);
//UPDATE STATS
router.put("/update/stats/:user", updateStats);
//GET ONE STAT
router.get("/find/stats/:user", getStats);
//GET Statistics
router.get("/stats/all/:group", getAllStats);

export default router