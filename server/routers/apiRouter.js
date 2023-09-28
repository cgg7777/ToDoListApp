import express from "express";
import db from "../db.js";
import getPlanQuery from "../queries/getPlanQuery.js";
import postPlanQuery from "../queries/postPlanQuery.js";
import deletePlanQuery from "../queries/deletePlanQuery.js";
import updatePlanQuery from "./../queries/updatePlanQuery.js";

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
        const fullDate = new Date(req.body.fullDate);
        await db.query(postPlanQuery, [title, title, 1, 0, fullDate, currentTime, currentTime, 1]);
        const [rows, columns] = await db.query(getPlanQuery, [1]);
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

        await db.query(updatePlanQuery, [completedValue, id]);
        res.status(200).json({ completedValue });
    } catch (error) {
        res.status(500).json({ message: "Plan edit Error" });
    }
});

export default apiRouter;
