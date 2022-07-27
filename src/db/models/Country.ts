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