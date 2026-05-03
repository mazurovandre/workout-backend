import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, ExercisesModule],
})
export class AppModule {}
