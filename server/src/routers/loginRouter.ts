import * as express from "express";
import db from "../db";

import getUserQuery from "../queries/getUserQeury";
import hash from "../utils/hash";
import { getAccessToken, getRefreshToken } from "../utils/jwt/getToken";
import { UserNotExist } from "../customExceptions/loginException";
import client from "../utils/redis/client";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
    try {
        const email = req.body.email;
        const password = hash(req.body.password);

        const [rows, columns]: any[] = await db.query(getUserQuery, [email, password]);
        if (rows.length <= 0) throw new UserNotExist();

        const token = getAccessToken(email);
        const refreshToken = getRefreshToken();

        client.set(email, refreshToken);
        res.cookie("refresh_token", refreshToken, { httpOnly: true });
        res.status(200).json({
            token,
            email,
        });
    } catch (error: any) {
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
