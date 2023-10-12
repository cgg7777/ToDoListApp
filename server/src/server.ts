import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import apiRouter from "./routers/apiRouter";
import loginRouter from "./routers/loginRouter";
import userRouter from "./routers/userRouter";
import client from "./utils/redis/client";

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

export default app;
