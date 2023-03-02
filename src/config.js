import dotenv from "dotenv";
import path from "path";

export async function ReadConfig() {
    dotenv.config();
    const resolvedir = (dir) => dir ? path.resolve(process.cwd(), dir) : undefined;
    const config = {
        server: {
            port: +process.env.PORT || 3000,
        },
        database: {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
        app: {
            dir: resolvedir("../frontend")
        }
    }
    Object.defineProperty(config.database, "db_url", {
        enumerable: false
    });
    return config;
}
