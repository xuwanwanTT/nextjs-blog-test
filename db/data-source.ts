import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    "type": "postgres",
    host: process.env.NODE_ENV === "production" ? "localhost" : "192.168.1.13",
    "port": 5432,
    "username": "blog",
    "password": "",
    database: process.env.NODE_ENV === "production" ? "blog_production" : "blog_development",
    "synchronize": false,
    "logging": false,
    "entities": [
        "dist/entity/**/*.js"
    ],
    "migrations": [
        "dist/migration/**/*.js"
    ],
    "subscribers": [
        "dist/subscribers/**/*.js"
    ],
    "migrationsRun": true
});
