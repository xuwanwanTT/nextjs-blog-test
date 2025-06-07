import "reflect-metadata"
import { DataSource } from "typeorm"
import config from "../ormconfig.json";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const AppDataSource = new DataSource({
    ...config as PostgresConnectionOptions,
    host: process.env.NODE_ENV === "production" ? "localhost" : config.host,
    database: process.env.NODE_ENV === "production" ? "blog_production" : "blog_development"
});
