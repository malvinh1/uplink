import express from 'express';
import { router } from './routes/index';
import { PORT } from './constants';

const app = express();

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
