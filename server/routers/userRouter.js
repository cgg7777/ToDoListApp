import express from "express";
import db from "../db.js";

import checkUserQuery from "../queries/checkUserQuery.js";
import postUserQuery from "../queries/postUserQuery.js";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
    try {
        const [checkUserRows, checkUserColumns] = await db.query(checkUserQuery, [req.body.email]);
        if (checkUserRows.length > 0) throw new Error("Duplicated Email");

        const [userRows, userColumns] = await db.query(postUserQuery, [req.body.email, req.body.password]);

        res.status(200).json({ message: "User Add Completed!" });
    } catch (error) {
        if (error.message === "Duplicated Email") res.status(409).json({ message: "Email Already Exist!" });
        else res.status(500).json({ message: "Plan Add Error" });
    }
});

export default userRouter;
