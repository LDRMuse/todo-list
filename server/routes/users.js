import { Router } from 'express';

import { addUser, loginUser } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>you have reached useres test route</h1>');
});

router.post('/create', async ({ body }, res) => {
  try {
    const mongoRes = await addUser(body);
    res.status(200);
    res.json(mongoRes);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
});

router.post('/login', async ({ body }, res) => {
  try {
    const mongoRes = await loginUser(body);
    res.status(201);
    res.json(mongoRes);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
});

export default router;
