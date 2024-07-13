// @ts-nocheck
import express from "express";
import { createUser, updateUser, deleteUser, getUser, getAllUsers } from "../controllers/User.js";
import { verifyTokenAdmin, verifyToken } from "../utils/verifyToken.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createUser);
//UPDATE
router.put("/:id", verifyToken, updateUser);
//DELETE
router.delete("/:id", verifyToken, deleteUser)
//GET
router.get("/:id", verifyToken, getUser)
//GET ALL
router.get("/", verifyTokenAdmin, getAllUsers)

export default router