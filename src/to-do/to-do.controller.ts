import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoDocument, taskStatus } from './to-do.schema';

@Controller('to-do')
export class ToDoController {
  constructor(private todoSvc: ToDoService) {}

  @Post()
  async create(@Body() todoData: ToDoDocument): Promise<ToDoDocument> {
    return this.todoSvc.create(todoData);
  }

  @Get(':id')
  async loadTaskByID(@Param('id') id: string): Promise<ToDoDocument> {
    return this.todoSvc.loadTaskByID(id);
  }

  @Get('userID/:id')
  async loadAllByUserID(@Param('id') userID: string) {
    return this.todoSvc.loadAllByUserID(userID);
  }

  @Get('userID/:userID/:status')
  async findByUserIdAndStatus(
    @Param('userID') userID: string,
    @Param('status') status: taskStatus,
  ) {
    return this.todoSvc.findByUserIdAndStatus(userID, status);
  }

  @Put('update/:todoID')
  async updateTaskByUserID(
    @Param('todoID') todoID: string,
    @Body() updatedData: ToDoDocument,
  ): Promise<ToDoDocument> {
    return this.todoSvc.updateTaskByUserID(todoID, updatedData);
  }

  @Delete('delete/:todoID')
  async deleteTodo(@Param('todoID') todoID: string): Promise<ToDoDocument> {
    console.log(todoID);
    return this.todoSvc.deleteTodo(todoID);
  }
}
