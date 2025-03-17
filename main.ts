import { Application } from 'jsr:@oak/oak/application';
import { Router } from 'jsr:@oak/oak/router';

const app = new Application();
const router = new Router();

router.get('/', (ctx) => {
  // plain text response
  // ctx.response.body = 'My oak rest api server.';

  // JSON response
	ctx.response.body = { message: 'My oak rest api server.' };
});

app.use(router.routes());

await app.listen({ port: 8080 });
