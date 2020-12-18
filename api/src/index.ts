import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) =>
  res.send('Express + Typescript Server'),
);

app.listen(8000, () => {
  console.log('Server is running at http://localhost:8000');
});
