import * as express from "express";
import * as jwt from "jsonwebtoken";
import db from "../db";
import getPlanQuery from "../queries/getPlanQuery";
import postPlanQuery from "../queries/postPlanQuery";
import deletePlanQuery from "../queries/deletePlanQuery";
import updatePlanQuery from "./../queries/updatePlanQuery";
import auth from "../utils/jwt/jwtValidation";
import checkUserQuery from "./../queries/checkUserQuery";
import client from "../utils/redis/client";

const apiRouter = express.Router();
apiRouter.use(auth);
apiRouter.get("/plans", async (req: any, res: any) => {
    try {
        const [userRows, userColumns]: any[] = await db.query(checkUserQuery, [req.user.email]);
        const [rows, columns] = await db.query(getPlanQuery, [userRows[0].id]);
        res.status(200).json({ rows });
    } catch (error) {
        res.status(500).json({ message: "Plan Load Error" });
    }
});
apiRouter.post("/plans", async (req: any, res: any) => {
    try {
        const title = req.body.newPlanName;
        const datetimeStart = req.body.datetimeStart;
        const datetimeEnd = req.body.datetimeEnd;

        const [userRows, userColumns]: any = await db.query(checkUserQuery, [req.user.email]);

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

apiRouter.delete("/refresh", async (req: any, res: any) => {
    try {
        const userData: any = jwt.decode(req.headers.authorization);
        const email = userData.email;
        client.del(email);
        res.status(200).json({ message: "Refresh Token Deleted" });
    } catch (error) {
        res.status(500).json({ message: "Refresh Token Delete Failed" });
    }
});

export default apiRouter;
