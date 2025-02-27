import { App } from './app';

const port = process.env.NX_MATRIX_PROCESS_PORT || 3001;
const app = new App();

app.start(+port);
