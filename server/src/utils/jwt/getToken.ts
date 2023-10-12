import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const getAccessToken = (email: string) => {
    const key: string = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

    const token = jwt.sign(
        {
            type: "JWT",
            alg: "SHA256",
            email: email,
        },
        key,
        { expiresIn: "15m", issuer: "cgg7777" }
    );
    return token;
};

const getRefreshToken = () => {
    const key: string = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

    const token = jwt.sign({}, key, { expiresIn: "7d", issuer: "cgg7777" });
    return token;
};

export { getAccessToken, getRefreshToken };
