import express from "express";
import path from "path";
import cors from "cors";
import apiRouter from "./routers/apiRouter.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", apiRouter);

app.listen(8080, function () {
    console.log("listening on 8080");
});
