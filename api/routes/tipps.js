// @ts-nocheck
import express from "express";
import { createTipp, updateTipps, getTipps, getAllTipps } from "../controllers/tipps.js";

const router = express.Router();

//CREATE
router.post("/create", createTipp);
//UPDATE
router.put("/update/:user/:day", updateTipps);
//GET ONE
router.get("/find/:user/:day", getTipps);
//GET COMPLETE GAMEDAY
router.get("/all/:day", getAllTipps);
export default router