/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Student } from 'src/students/entities/student.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  email: string; //email válido

  @Prop({ required: true })
  username: string; // unico;

  @Prop({ required: true })
  password: string; //1 letra maiscula, 1 letra minuscula, 1 numero, 1 caractere especial, 8 caracteres minimo

  @Prop({ required: true, default: 'USER' })
  role: 'ADMIN' | 'USER';

  @Prop({ required: true })
  birthDate: Date; //maior que 18 anos

  @Prop({ default: false })
  active: boolean; //default é false

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] })
  dependents: Student[] //validar se student existe antes de adicionar
}

export const UserSchema = SchemaFactory.createForClass(User);
