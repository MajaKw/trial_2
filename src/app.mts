import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
import {Request, Response} from 'express';

export const accounts = pgTable('accounts', {
  user_id: serial('user_id').primaryKey(),
  username: text('username').unique().notNull()
});

const express = require('express');
// or
const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "maisho",
  password: "Piesiu111.",
  database: "radek_db",
});
console.log("das")
await client.connect();
const db = drizzle(client);

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  const result = db.select().from(accounts);
  result.then((response)=>{
    res.send(response)
  })
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
