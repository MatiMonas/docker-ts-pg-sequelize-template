import { sequelize } from './models';
import Country from './models/Country.model';
import User from './models/Users.model';

const { FORCE_SYNC_DB } = process.env;

export const connectToDB = async () => {
  const force = FORCE_SYNC_DB === 'true';

  await sequelize.sync({ force }).then(async () => {
    console.log('DB Synced');
  });
};
