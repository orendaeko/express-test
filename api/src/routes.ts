import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
  res.json({ name: 'Hello John Doe' });
});

export default router;
