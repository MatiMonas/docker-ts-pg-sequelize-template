import { DataTypes, Model, Optional } from 'sequelize';
import {sequelize} from '.';
import User from './Users.model';

interface CountryAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deltedAt?: Date;
}

export interface CountryInput extends Optional<CountryAttributes, 'id'> {}
export interface CountryOutput extends Required<CountryAttributes> {}

class CountryInstance
  extends Model<CountryAttributes, CountryInput>
  implements CountryAttributes
{
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

const Country = sequelize.define<CountryInstance>(
  'Country',
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
  },
  {
    timestamps: true,
    paranoid: true, // soft delete
  },
);

User?.belongsTo(Country, { foreignKey: 'id' });

export default Country;
