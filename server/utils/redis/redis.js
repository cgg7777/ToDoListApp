import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient(process.env.REDIS_PORT);

export default client;
