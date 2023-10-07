import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import client from "./../redis/redis.js";
import util from "util";

dotenv.config();

const verifyRefresh = async (refreshToken, email) => {
    const key = process.env.SECRET_KEY;
    const getAsync = util.promisify(client.get).bind(client);
    try {
        const token = await getAsync(email);

        if (token === refreshToken) {
            jwt.verify(token, key);
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export { verifyRefresh };
