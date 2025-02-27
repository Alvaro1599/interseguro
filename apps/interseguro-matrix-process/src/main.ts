import { App } from './app';

const port = process.env.NX_MAINSERVICE_PORT;
const app = new App();

app.start(+port);
