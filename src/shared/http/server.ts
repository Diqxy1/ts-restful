import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import uploadConfig from '@config/upload';
import routes from './routes';
import '@shared/typeorm';
import serverError from './services/serverError';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use(errors());

app.use(serverError);

app.listen(3333, () => {
  // eslint-disable-next-line
  console.log('🔥 Server started http://localhost:3333');
});
