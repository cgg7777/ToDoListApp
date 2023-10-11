import request from "supertest";
import app from "../server.js";

describe("test", () => {
    it("login 요청", async () => {
        const response = await request(app).post("/login").send({ email: "test@naver.com", password: "asdf0258" });
        expect(response.statusCode).toBe(200);
    });
});
