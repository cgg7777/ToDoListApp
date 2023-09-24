import express from "express";
import path from "path";
import cors from "cors";
import db from "./db.js";
const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../todolist/build")));
app.use(cors());

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../todolist/build/index.html"));
});

app.listen(8080, function () {
    console.log("listening on 8080");
});
