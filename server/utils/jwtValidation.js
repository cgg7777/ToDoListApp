import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (req, res, next) => {
    const key = process.env.SECRET_KEY;
    try {
        req.user = jwt.verify(req.headers.authorization, key);

        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(419).json({
                code: 419,
                message: "Token was expired",
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                code: 401,
                message: "Invalid Token",
            });
        }
    }
};

export default auth;
