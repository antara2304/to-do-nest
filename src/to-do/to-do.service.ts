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
    return this.todoSchema.find({ userID }).sort({ _id: -1 }).exec();
  }

  async findByUserIdAndStatus(
    userID: string,
    status: taskStatus,
  ): Promise<ToDoDocument[]> {
    return this.todoSchema.find({ userID, status }).exec();
  }

  async updateTaskByUserID(
    todoID: string,
    data: ToDoDocument,
  ): Promise<ToDoDocument> {
    return this.todoSchema
      .findByIdAndUpdate(todoID, data, { new: false })
      .exec();
  }

  async deleteTodo(todoID: string): Promise<ToDoDocument> {
    return this.todoSchema.findByIdAndDelete(todoID).exec();
  }
}
