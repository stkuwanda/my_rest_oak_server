import { Application } from 'jsr:@oak/oak/application';
import { Router } from 'jsr:@oak/oak/router';
import { authorRouter } from './modules/author/routes.ts';

const app = new Application();
const router = new Router();

router.get('/', (ctx) => {
	// plain text response
	// ctx.response.body = 'My oak rest api server.';

	// JSON response
	ctx.response.body = { message: 'My oak rest api server.' };
});

router.use('/author', authorRouter.routes());

app.use(router.routes());

await app.listen({ port: 8080 });
