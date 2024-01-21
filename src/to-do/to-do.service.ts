import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo, ToDoDocument, taskStatus } from './to-do.schema';
import { Model } from 'mongoose';

@Injectable()
export class ToDoService {
  constructor(@InjectModel(ToDo.name) private todoSchema: Model<ToDo>) {}

  async create(todo: ToDoDocument): Promise<ToDoDocument> {
    const createdTodo = new this.todoSchema(todo);
    return createdTodo.save();
  }

  async loadTaskByID(id: string): Promise<ToDoDocument> {
    return this.todoSchema.findById(id).exec();
  }

  async loadAllByUserID(userID: string): Promise<ToDoDocument[]> {
    return this.todoSchema.find({ userID }).exec();
  }

  async findByUserIdAndStatus(
    userID: string,
    status: taskStatus,
  ): Promise<ToDoDocument[]> {
    return this.todoSchema.find({ userID, status }).exec();
  }
}
