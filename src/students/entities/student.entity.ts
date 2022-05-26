/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  fullName: string;

  @Prop()
  gender: "Male" | "Female";

  @Prop()
  birthDate: Date;

  @Prop()
  active: boolean;

  @Prop()
  responsabiles: string; //trocar para UserId[]
}

export const StudentSchema = SchemaFactory.createForClass(Student);
