import { App } from './app';

const port = process.env.NX_MAINSERVICE_PORT || 3000;
const app = new App();

app.start(+port);
