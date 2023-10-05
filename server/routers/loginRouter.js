import express from "express";
import db from "../db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import getUserQuery from "./../queries/getUserQeury.js";
import hash from "../utils/hash.js";
import { UserNotExist } from "../customExceptions/loginException.js";

dotenv.config();
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
    try {
        const key = process.env.SECRET_KEY;

        const email = req.body.email;
        const password = hash(req.body.password);

        const [rows, columns] = await db.query(getUserQuery, [email, password]);

        if (rows.length <= 0) throw new UserNotExist();

        const token = jwt.sign(
            {
                type: "JWT",
                email: email,
            },
            key,
            { expiresIn: "15m", issuer: "cgg7777" }
        );

        res.status(200).json({
            token,
        });
    } catch (error) {
        if (error instanceof UserNotExist) {
            res.status(error.status).json({
                message: error.message,
            });
        } else {
            res.status(500).json({
                message: error.message,
            });
        }
    }
});

export default loginRouter;
