import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExerciseDocument = HydratedDocument<Exercise>;

@Schema()
export class Exercise {
  @Prop()
  title: string;

  @Prop()
  muscleGroup: string;

  @Prop()
  description: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
