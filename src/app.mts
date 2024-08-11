import { initTRPC } from '@trpc/server';
import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
import { Request, Response } from 'express';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from './trpc.js';

const express = require('express');
const app = express();


app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.listen(8000);

// export const accounts = pgTable('accounts', {
//   user_id: serial('user_id').primaryKey(),
//   username: text('username').unique().notNull()
// });



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
