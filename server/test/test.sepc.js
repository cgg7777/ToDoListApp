import request from "supertest";
import app from "../server.js";
import { getAccessToken } from "../utils/jwt/getToken.js";
import dotenv from "dotenv";

dotenv.config();

describe("Login Test", () => {
    it("login 요청", async () => {
        const response = await request(app).post("/login").send({ email: process.env.TEST_ID, password: process.env.TEST_PASSWORD });
        expect(response.statusCode).toBe(200);
    });
    it("틀린 비밀번호로 Login 요청", async () => {
        const response = await request(app).post("/login").send({ email: process.env.TEST_ID, password: "asdf" });
        expect(response.statusCode).toBe(400);
    });
});

describe("Plan API Test", () => {
    const accessToken = getAccessToken(process.env.TEST_ID);
    it("get plan 요청", async () => {
        const response = await request(app).get("/api/plans").set("Authorization", accessToken);
        expect(response.statusCode).toBe(200);
    });
    it("access Token 없이 get plan 요청", async () => {
        const response = await request(app).get("/api/plans");
        expect(response.statusCode).toBe(401);
    });
    it("post plan 요청", async () => {
        const offset = -9;
        const currentDate = new Date();
        const koreanDate = new Date(currentDate.getTime() - offset * 60 * 60 * 1000);
        const dateTime = koreanDate.toISOString().slice(0, 19).replace("T", " ");
        const dummy = { newPlanName: "title", datetimeStart: dateTime, datetimeEnd: dateTime };
        const response = await request(app).post("/api/plans").set("Authorization", accessToken).send(dummy);
        expect(response.statusCode).toBe(200);
    });
});
