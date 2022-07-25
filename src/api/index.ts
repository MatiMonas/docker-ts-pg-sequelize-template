import '../common/env';
import express from 'express';
import { errorHandler } from './middlewares/errorHandler/index';
import db from '../db';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

export const server = express();
const { sequelize } = db;

const { FORCE_SYNC_DB, SYNC_DB } = process.env;

export const connectToDB = async () => {
  const force = FORCE_SYNC_DB === 'true';
  if (force || SYNC_DB === 'true') {
    await sequelize.sync({ force }).then(() => {
      console.log('DB Synced');
    });
  }
};

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));

server.use(
  cors({
    credentials: true,
  }),
);

server.use('/', routes);

server.use(errorHandler);
