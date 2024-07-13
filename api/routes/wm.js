import express from "express";
import { createTipp, updateTipps, getTipps, getAllTipps } from "../controllers/wm.js";

const router = express.Router();

//CREATE TIPPS
router.post("/create", createTipp);
//UPDATE TIPPS
router.put("/update/:user/:group", updateTipps);
//GET ONE TIPP
router.get("/find/:user/:group", getTipps);
//GET COMPLETE GAMEDAY
router.get("/all/:day", getAllTipps);

export default router