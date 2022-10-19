// import { Request, Response } from "express";

// export default async (req: Request, res: Response) => {
//   res.json({ message: "Hello guys. Welcome to Vercel" });
// };

import app from './src/app';
/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(`App is initialised ${app.get('port')}`);
});

export default server;
