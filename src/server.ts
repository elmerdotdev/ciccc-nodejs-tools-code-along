import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const users = [{ name: 'Miya' }, { name: 'Yuna' }];

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome to my server!');
  if (true) {
    console.log('Hello');
  }
});

app.get('/about', (req: Request, res: Response) => {
  res.status(200).send('About Us');
});

app.use((req: Request, res: Response) => {
  res.status(404).send('Invalid route!');
});

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error('Missing port!');
}
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
