import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import client from "../redis/client";
import * as util from "util";

dotenv.config();

const verifyRefresh = async (refreshToken: any, email: string) => {
    const key: any = process.env.SECRET_KEY;
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
