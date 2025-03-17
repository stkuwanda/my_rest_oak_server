import '@std/dotenv/load';
import postgres from 'https://deno.land/x/postgresjs@v3.4.5/mod.js';

export const username = Deno.env.get('DATABASE_USER');
export const database = Deno.env.get('DATABASE_NAME');
export const port = +Deno.env.get('DATABASE_PORT')!; // make sure port is of number type
export const host = Deno.env.get('DATABASE_HOST');
export const password = Deno.env.get('DATABASE_PASS');

export const sql = postgres(
	`postgres://${username}:${password}@${host}:${port}/database`,
	{ username, port, host, database, password }
);
