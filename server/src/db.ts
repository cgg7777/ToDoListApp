import { createPool, Pool, PoolOptions } from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

const port: number | undefined = process.env.SSH_DATABASE_PORT ? parseInt(process.env.SSH_DATABASE_PORT) : undefined;

const dbConfig: PoolOptions = {
    host: process.env.SSH_HOST,
    user: process.env.SSH_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: port,
    connectionLimit: 10,
};

const db: Pool = createPool(dbConfig);

export default db;
