import express from "express";
import db from "../db.js";
import getPlanQuery from "../queries/getPlanQuery.js";
import postPlanQuery from "../queries/postPlanQuery.js";
import deletePlanQuery from "../queries/deletePlanQuery.js";
import updatePlanQuery from "./../queries/updatePlanQuery.js";
import auth from "../utils/jwtValidation.js";
import checkUserQuery from "./../queries/checkUserQuery.js";
import postUserQuery from "../queries/postUserQuery.js";

const apiRouter = express.Router();

apiRouter.use(auth);
apiRouter.get("/plans", async (req, res) => {
    try {
        const [userRows, userColumns] = await db.query(checkUserQuery, [req.user.email]);
        const [rows, columns] = await db.query(getPlanQuery, [userRows[0].id]);
        res.status(200).json({ rows });
    } catch (error) {
        res.status(500).json({ message: "Plan Load Error" });
    }
});
apiRouter.post("/plans", async (req, res) => {
    try {
        const title = req.body.newPlanName;
        const datetimeStart = req.body.datetimeStart;
        const datetimeEnd = req.body.datetimeEnd;
        const [userRows, userColumns] = await db.query(checkUserQuery, [req.user.email]);

        await db.query(postPlanQuery, [title, title, 1, 0, datetimeStart, datetimeEnd, datetimeEnd, userRows[0].id]);
        const [rows, columns] = await db.query(getPlanQuery, [userRows[0].id]);
        res.status(200).json({ rows });
    } catch (error) {
        res.status(500).json({ message: "Plan Add Error" });
    }
});

apiRouter.delete("/plans/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await db.query(deletePlanQuery, [id]);
        res.status(200).json({ message: "Plan Delete Success" });
    } catch (error) {
        res.status(500).json({ message: "Plan Delete Error" });
    }
});

apiRouter.put("/plans/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const completedValue = req.body.futureCompletedValue;
        const datetimeString = req.body.datetimeString;

        await db.query(updatePlanQuery, [completedValue, datetimeString, id]);
        res.status(200).json({ completedValue });
    } catch (error) {
        res.status(500).json({ message: "Plan edit Error" });
    }
});

export default apiRouter;
