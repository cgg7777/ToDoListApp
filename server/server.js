import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRouter from "./routers/apiRouter.js";
import loginRouter from "./routers/loginRouter.js";
import userRouter from "./routers/userRouter.js";
import client from "./utils/redis/redis.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/login", loginRouter);
app.use("/api", apiRouter);
app.use("/users", userRouter);
app.listen(8080, function () {
    client.connect();
    console.log("listening on 8080");
});
