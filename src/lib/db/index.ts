import postgres from 'postgres';
import { DB_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';

const client = postgres(DB_URL, { prepare: false });
export const db = drizzle(client);
