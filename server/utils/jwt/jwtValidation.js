import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { verifyRefresh } from "./verifyToken.js";
import { getAccessToken } from "./getToken.js";

dotenv.config();

const auth = async (req, res, next) => {
    const key = process.env.SECRET_KEY;
    try {
        req.user = jwt.verify(req.headers.authorization, key);
        return next();
    } catch (accessError) {
        if (accessError.name === "TokenExpiredError") {
            const userData = jwt.decode(req.headers.authorization);
            const refreshToken = req.cookies.refresh_token;
            if (verifyRefresh(refreshToken, userData.email)) {
                const newToken = getAccessToken(userData.email);
                req.headers.authorization = newToken;
                req.user = userData;
                return next();
            }

            return res.status(419).json({
                code: 419,
                message: "Refresh Token was expired",
            });
        }

        if (accessError.name === "JsonWebTokenError") {
            return res.status(401).json({
                code: 401,
                message: "Invalid Token",
            });
        }
    }
};

export default auth;
