import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/workout-app'),
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
