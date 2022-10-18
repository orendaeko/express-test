import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
  res.send('Hello there');
});

export default router;
