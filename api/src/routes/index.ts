import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/', (_: Request, res: Response) => {
  res.send('Hello world');
});

router.get('/user', (_, res: Response) => {
  res.send('MASUK');
});
