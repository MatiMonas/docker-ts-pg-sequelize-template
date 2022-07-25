import { Sequelize } from 'sequelize';
import url from './config';

const sequelize = new Sequelize(url, {
  define: {
    underscored: true,

  },
});

export default {
  sequelize,
}