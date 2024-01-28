import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/user.schema';

export enum taskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export type ToDoDocument = HydratedDocument<ToDo>;
@Schema()
export class ToDo {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userID: User;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: String, enum: taskStatus, default: taskStatus.TODO })
  status: taskStatus;

  @Prop()
  date: Date;

  @Prop()
  isCompleted: boolean;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
