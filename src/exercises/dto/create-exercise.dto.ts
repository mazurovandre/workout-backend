/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateExerciseDto {
  @IsNotEmpty()
  @Length(2, 30)
  title: string;

  @IsNotEmpty()
  @Length(2, 200)
  muscleGroup: string;

  @IsOptional()
  @Length(2, 200)
  description: string;
}
