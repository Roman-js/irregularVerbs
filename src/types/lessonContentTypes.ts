export type ExerciseType = {
  verbid: number;
  form: number;
};

export type LessonType = ExerciseType[];

export type VerbType = {
  verbid: number;
  group: number;
  v1: string;
  v2: string;
  v3: string;
  tr: string;
  v1sentence: string;
  v2sentence: string;
  v3sentence: string;
  es: string;
  fr: string;
  de: string;
  ru: string;
  pt: string;
  it: string;
  pl: string;
  ar: string;
  ko: string;
  he: string;
  ka: string;
  id: string;
  hi: string;
  bn: string;
};
