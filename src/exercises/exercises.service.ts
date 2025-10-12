import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Exercise, ExerciseDocument } from '../../schemas/exercise.schema';
import { Model } from 'mongoose';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name)
    private readonly exerciseModel: Model<ExerciseDocument>,
  ) {}

  async findAll(): Promise<Exercise[]> {
    return this.exerciseModel.find();
  }

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    return this.exerciseModel.create(createExerciseDto);
  }
}
