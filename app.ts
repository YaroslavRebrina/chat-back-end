import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { generateResponse } from './controllers';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.post('/generate', generateResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
