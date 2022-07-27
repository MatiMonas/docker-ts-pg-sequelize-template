// import { DataTypes, Model, Optional } from 'sequelize';
// import sequelize from '../config';

// interface CountryAttributes {
//   id: number;
//   name: string;
//   createdAt?: Date;
//   updatedAt?: Date;
//   deletedAt?: Date;
// }

// export interface CountryInput extends Optional<CountryAttributes, 'id'> {}
// export interface CountryOutput extends Required<CountryAttributes> {}

// class CountryInstance
//   extends Model<CountryAttributes, CountryInput>
//   implements CountryAttributes
// {
//   public id!: number;
//   public name!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
//   public readonly deletedAt!: Date;
// }

// const Country = sequelize.define<CountryInstance>(
//   'Country',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: true,
//     paranoid: true, // soft delete
//   },
// );

// User && User.belongsTo(Country, { foreignKey: 'id' });


import {Table, Model, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, HasMany} from 'sequelize-typescript';
import {Optional} from 'sequelize'
import User from './User';

interface CountryAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface CountryInput extends Optional<CountryAttributes, 'id'> {}
export interface CountryOutput extends Required<CountryAttributes> {}


@Table({ timestamps: true, paranoid: true , tableName: 'countries'})
class Country extends Model<CountryAttributes,CountryInput>  {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id!: number
  
  
  
  @AllowNull(false)
  @Column(DataType.STRING)
  public name!: string;
  
  @HasMany(() => User, 'countryId')
  public users!: User[];
}


export default Country;