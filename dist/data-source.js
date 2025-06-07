"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("reflect-metadata");
var _typeorm = require("typeorm");
var AppDataSource = exports.AppDataSource = new _typeorm.DataSource({
  "type": "postgres",
  host: process.env.NODE_ENV === "production" ? "localhost" : "192.168.1.13",
  "port": 5432,
  "username": "blog",
  "password": "",
  database: process.env.NODE_ENV === "production" ? "blog_production" : "blog_development",
  "synchronize": false,
  "logging": false,
  "entities": ["dist/entity/**/*.js"],
  "migrations": ["dist/migration/**/*.js"],
  "subscribers": ["dist/subscribers/**/*.js"],
  "migrationsRun": true
});