import type { Context } from 'jsr:@oak/oak';
import { sql } from '../../db/db.ts';

export const getAuthors = async (ctx: Context) => {
  const authors = await sql`
    SELECT * FROM author
  `;

  ctx.response.body = authors;
};
