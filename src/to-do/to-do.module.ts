import { Module } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, ToDoSchema } from './to-do.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }]),
  ],
  providers: [ToDoService],
  controllers: [ToDoController],
})
export class ToDoModule {}
