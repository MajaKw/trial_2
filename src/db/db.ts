type User = { id: string; name: string };
import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';

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
  export const db = drizzle(client);