"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
// or
const client = new pg_1.Client({
    host: "127.0.0.1",
    port: 5432,
    user: "maisho",
    password: "Piesiu111.",
    database: "radek_db",
});
console.log("das");
client.connect();
const db = (0, node_postgres_1.drizzle)(client);
