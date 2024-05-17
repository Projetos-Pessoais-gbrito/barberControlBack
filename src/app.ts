import 'dotenv/config';
import express from 'express';
import { Request, Response } from 'express';

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

interface IPerson {
  id: number;
  name: string;
}

export class Person implements IPerson {
  constructor(
    public id: number,
    public name: string
  ) {
    this.id = id;
    this.name = name;
  }
}
