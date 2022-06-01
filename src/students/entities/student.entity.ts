/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  gender: "Male" | "Female";

  @Prop({ required: true })
  birthDate: Date;

  @Prop({ default: false })
  active: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  responsibles: User[]; 
}

export const StudentSchema = SchemaFactory.createForClass(Student);
