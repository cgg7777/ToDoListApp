import express from "express";
import db from "../db.js";
import getPlanQuery from "../queries/getPlanQuery.js";
import postPlanQuery from "../queries/postPlanQuery.js";

const apiRouter = express.Router();

apiRouter.get("/plans", async (req, res) => {
    const [rows, columns] = await db.query(getPlanQuery, [1]);
    res.json({ rows });
});
apiRouter.post("/plans", async (req, res) => {
    const currentTime = new Date();
    const title = req.body.newPlanName;
    await db.query(postPlanQuery, [title, title, 1, 0, currentTime, currentTime, currentTime, 1]);
    const [rows, columns] = await db.query(getPlanQuery, [1]);
    res.json({ rows });
});
export default apiRouter;
