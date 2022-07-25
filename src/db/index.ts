import { Sequelize } from 'sequelize';

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST || 'postgres',
  port: Number(DB_PORT),
  database: DB_NAME || 'postgres',
  username: DB_USERNAME || 'postgres',
  password: DB_PASSWORD || 'postgres',
  define: {
    underscored: true,
  },
});

export default {
  sequelize,
};
