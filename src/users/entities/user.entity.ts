import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ required: true })
  email: string; //email valido

  @Prop({ required: true })
  username: string; // único

  @Prop({ required: true })
  password: string; // 1 letra maiuscula, 1 letra minuscula, 1 numero, 1 caractere especial e minimo 8 caracteres

  @Prop({ required: true })
  role: 'ADMIN' | 'USER ';

  @Prop({ required: true })
  birthDate: Date; // maior de 18

  @Prop() // default é false
  active: boolean;

  @Prop()
  dependents: string; // validar se student existe [Mudar para StudentId[] quando fizer crud]
}

export const UsersSchema = SchemaFactory.createForClass(Users);
