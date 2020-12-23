import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/', (_: Request, res: Response) => {
  res.send('This is uplink API');
});
