import * as express from "express";
import db from "../db";

import checkUserQuery from "../queries/checkUserQuery";
import postUserQuery from "../queries/postUserQuery";
import hash from "../utils/hash";

import { EmailDuplicated } from "../customExceptions/registException";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
    try {
        const [checkUserRows, checkUserColumns]: any[] = await db.query(checkUserQuery, [req.body.email]);
        if (checkUserRows.length > 0) throw new EmailDuplicated();

        await db.query(postUserQuery, [req.body.email, hash(req.body.password)]);

        res.status(200).json({ message: "User Add Completed!" });
    } catch (error: any) {
        if (error instanceof EmailDuplicated) {
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

export default userRouter;
