import * as redis from "redis";
import * as dotenv from "dotenv";

dotenv.config();

const client = redis.createClient();

export default client;
