import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.json({ name: 'Hello John Doe' });
});

export default router;
