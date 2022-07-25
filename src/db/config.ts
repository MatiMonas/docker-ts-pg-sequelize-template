import '../common/env';

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const config = {
  dialect: 'postgres',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME || 'postgres',
  host: DB_HOST || 'postgres',
  port: DB_PORT,
  url: ''
};

config.url = `${config.dialect}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;

export default config.url