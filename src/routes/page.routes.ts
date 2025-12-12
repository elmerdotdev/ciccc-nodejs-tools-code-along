import Router, { Request, Response } from 'express';

const pageRouter = Router();

pageRouter.get('/my-story', (req: Request, res: Response) => {
  res.status(200).send('My Story');
});

export default pageRouter;
