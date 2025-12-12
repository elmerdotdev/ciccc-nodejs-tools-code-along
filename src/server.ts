
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import pageRouter from './routes/page.routes';
dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());

app.use("/contact-us", pageRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Welcome to my server!');
});

app.get('/about', (_req: Request, res: Response) => {
  res.status(200).send('About Us');
});

app.use((_req: Request, res: Response) => {
  res.status(404).send('Invalid route!');
});

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error('Missing port!');
}
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
