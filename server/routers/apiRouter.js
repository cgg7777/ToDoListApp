import express from "express";
import db from "../db.js";
import getPlanQuery from "../queries/getPlanQuery.js";
import postPlanQuery from "../queries/postPlanQuery.js";

const apiRouter = express.Router();

apiRouter.get("/plans", async (req, res) => {
    try {
        const [rows, columns] = await db.query(getPlanQuery, [1]);
        res.status(200).json({ rows });
    } catch (error) {
        res.status(500).json({ message: "Plan Load Error" });
    }
});
apiRouter.post("/plans", async (req, res) => {
    const currentTime = new Date();
    try {
        const title = req.body.newPlanName;
        await db.query(postPlanQuery, [title, title, 1, 0, currentTime, currentTime, currentTime, 1]);
        const [rows, columns] = await db.query(getPlanQuery, [1]);
        res.status(200).json({ rows });
    } catch (error) {
        res.status(500).json({ message: "Plan Load Error" });
    }
});
export default apiRouter;
