import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.exercise.findMany();
  }

  findOne(id: string) {
    return this.prisma.exercise.findUnique({ where: { id } });
  }

  create(data: CreateExerciseDto) {
    return this.prisma.exercise.create({ data });
  }

  update(id: string, data: UpdateExerciseDto) {
    return this.prisma.exercise.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.exercise.delete({ where: { id } });
  }
}
