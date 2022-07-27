import { Sequelize } from 'sequelize-typescript';
import { Country, User } from './models';

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize({
  database: DB_NAME || 'postgres',
  host: DB_HOST || 'postgres',
  port: Number(DB_PORT) || 5432,
  dialect: 'postgres',
  username: DB_USERNAME || 'postgres',
  password: DB_PASSWORD || 'postgres',
  storage: ':memory:',
  models: [Country, User],
  logging: false,
});

export default sequelize;
