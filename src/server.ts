import { Application } from './denotrain/index.ts';
import { serviceName, servicePort } from './constants/index.ts';
import { api } from './api/index.ts';

const app = new Application({
  port: servicePort,
});

// Middleware
// app.use((ctx) => {
//   // Add data to the response object and return undefined
//   // -> Still passed to other handlers

//   // Add cookies to the deno train cookie handler
//   ctx.cookies['user.session'] = 'qwertz';
//   ctx.cookies['a'] = '123';
//   ctx.cookies['b'] = '456';
//   delete ctx.cookies['user.session'];
//   return;
// });

app.get('/', () => { hello: 'world' });

app.use('/api', api);

app.run();

console.log(`${serviceName} running at ${servicePort}`);