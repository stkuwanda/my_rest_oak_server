import { Router } from '@oak/oak';
import { getAuthors } from './handler.ts';

export const authorRouter = new Router();

authorRouter.get('/', getAuthors);


