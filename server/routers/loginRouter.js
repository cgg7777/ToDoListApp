import express from "express";
import db from "../db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import getUserQuery from "./../queries/getUserQeury.js";

dotenv.config();
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
    try {
        const key = process.env.SECRET_KEY;

        const email = req.body.email;
        const password = req.body.password;

        const [rows, columns] = await db.query(getUserQuery, [email, password]);

        if (rows.length <= 0) {
            res.status(400).json({
                message: "Not Existing User",
            });
            return;
        }

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
        res.status(500).json({
            message: "login failed",
        });
    }
});

export default loginRouter;
