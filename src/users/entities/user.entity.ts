/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string; //email válido

  @Prop()
  username: string; // unico;

  @Prop()
  password: string; //1 letra maiscula, 1 letra minuscula, 1 numero, 1 caractere especial, 8 caracteres minimo

  @Prop()
  role: 'ADMIN' | 'USER';

  @Prop()
  birthDate: Date; //maior que 18 anos

  @Prop()
  active: boolean; //default é false

  @Prop()
  dependents: string; //alterar para StudentId[] depois de criado //validar se student existe antes de adicionar
}

export const UserSchema = SchemaFactory.createForClass(User);
