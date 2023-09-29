import express from "express";
import path from "path";
import cors from "cors";
import apiRouter from "./routers/apiRouter.js";
import loginRouter from "./routers/loginRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/login", loginRouter);
app.use("/api", apiRouter);
app.use("/users", userRouter);
app.listen(8080, function () {
    console.log("listening on 8080");
});
