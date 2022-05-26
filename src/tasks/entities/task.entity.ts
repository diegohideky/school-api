/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  active: boolean;

  @Prop()
  type: "YES_NO" | "STAR" | "UP_TO_TEN" | "LIKE_DESLIKE";
}

export const TaskSchema = SchemaFactory.createForClass(Task);
