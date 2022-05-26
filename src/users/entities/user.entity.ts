/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  email: string; //e-mail válido

  @Prop()
  username: string; //único

  @Prop()
  password: string; //1 letra maiscula, 1 letra miniscula, 1 numero, 1 caractere especial, 8 letras minimo

  @Prop()
  role: "ADMIN" | "USER"

  @Prop()
  birthDate: Date // maior de 18

  @Prop()
  active: boolean; //default é false

  @Prop()
  dependents: string; // trocar para StudentId[] depois de criar crud // validar se student existe antes de adic
}

export const UsersSchema = SchemaFactory.createForClass(Users);
