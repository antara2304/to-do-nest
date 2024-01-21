import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ToDoModule } from './to-do/to-do.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // imports: [AuthModule, UsersModule],
  imports: [
    MongooseModule.forRoot('mongodb://localhost/to-do'),
    AuthModule,
    UserModule,
    ToDoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
