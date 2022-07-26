import { sequelize } from './models';
import Country from './models/Country.model';
import User from './models/Users.model';

const { FORCE_SYNC_DB } = process.env;

export const connectToDB = async () => {
  const force = FORCE_SYNC_DB === 'true';

  await sequelize.sync({ force }).then(async (res) => {
    console.log('DB Synced');
    const country = await Country.create({ name: 'India' });
    const user =await  User.create({
      name: 'John Doe',
      email: 'mail@mail.com',
      countryId: 1,
    });
  });
};
