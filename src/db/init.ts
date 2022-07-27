import sequelize from "./config";


const isDev = process.env.NODE_ENV === 'development';



const dbInit = async () => {
  await sequelize.sync({ force: false });
}

export default dbInit;
