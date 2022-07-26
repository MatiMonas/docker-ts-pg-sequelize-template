import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  BelongsTo,
  Unique,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  IsEmail,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import Country from './Country';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  country?: Country;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {
  countryId?: number;
}
export interface UserOutput extends Required<UserAttributes> {
  country: Country;
}

@Table({ timestamps: true, paranoid: true, tableName: 'users' })
class User extends Model<UserAttributes, UserInput> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public name!: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  public email!: string;

  @ForeignKey(() => Country)
  @Column
  public countryId!: number;

  @BelongsTo(() => Country, 'countryId')
  public country!: Country;

  @CreatedAt
  @Column(DataType.DATE)
  public readonly createdAt!: Date;

  @Column(DataType.DATE)
  @UpdatedAt
  public readonly updatedAt!: Date;

  @Column(DataType.DATE)
  @DeletedAt
  public readonly deletedAt!: Date;
}

export default User;
