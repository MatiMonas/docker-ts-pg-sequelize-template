import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';
import Country from './Country.model';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  countryId: number;
  createdAt?: Date;
  updatedAt?: Date;
  deltedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOutput extends Required<UserAttributes> {}

class UserInstance
  extends Model<UserAttributes, UserInput>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public countryId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

const User = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true, // soft delete
  },
)

Country?.hasMany(User, { foreignKey: 'countryId' });

export default User;
