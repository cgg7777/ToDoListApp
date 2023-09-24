import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql2.createPool({
    host: process.env.SSH_HOST,
    user: process.env.SSH_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.SSH_DATABASE_PORT,
    connectionLimit: 10,
});

export default db;
