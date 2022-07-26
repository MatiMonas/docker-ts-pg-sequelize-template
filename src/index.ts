import './common/env';
import express, { Application } from 'express';
import { errorHandler } from './api/middlewares/errorHandler';
import morgan from 'morgan';
import cors from 'cors';
import routes from './api/routes';
import { connectToDB } from './db/init';

const port: number = Number(process.env.PORT) || 3001;

const getApplication = () => {
  const app: Application = express();

  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  app.use(express.json({ limit: '50mb' }));
  app.use(morgan('dev'));

  app.use(
    cors({
      credentials: true,
    }),
  );
  app.use('/api', routes);
  app.use(errorHandler);

  return app;
};

const main = () => {
  const app = getApplication();
  try {
    app.listen(port, async () => {
      await connectToDB().then(() =>
        console.log(`Server running on http://localhost:${port}`),
      );
    });
  } catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
  }
};

main()