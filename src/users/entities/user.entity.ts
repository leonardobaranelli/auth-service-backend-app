import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, Model, DataType, Default, PrimaryKey } from "sequelize-typescript";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Table({ tableName: 'User' })
export class User extends Model<User> {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column({ type: DataType.UUID, allowNull: false })
    @ApiProperty()
    id: string;

    @Column({ allowNull: false })
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Column({ allowNull: false, unique: true })
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column({ allowNull: false })
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}
