import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Student } from 'src/students/entities/student.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: 'USER' })
    role: string;

    @Prop({ required: true })
    birthDate: Date;

    @Prop({ default: false })
    active: boolean;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] })
    dependents: Student[];
}

export const UserSchema = SchemaFactory.createForClass(User);
