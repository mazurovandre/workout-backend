import { $Enums } from 'generated/prisma/client';

export class CreateExerciseDto {
  name: string;
  content?: string;
  muscleGroup: $Enums.muscleGroup;
}
