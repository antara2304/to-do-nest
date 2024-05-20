import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ToDoModule } from './to-do/to-do.module';
import { AuthModule } from './auth/auth.module';
// import { ConfigModule } from '@nestjs/config';

@Module({
  // imports: [AuthModule, UsersModule],
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UserModule,
    ToDoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
