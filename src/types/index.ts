export interface WorkoutSet {
  id: string;
  setNumber: number;
  weightLbs: number;
  reps: number;
  rpe: number;
  completed: boolean;
  isPersonalRecord?: boolean;
}

export interface ExerciseDemo {
  id: string;
  name: string;
  targetMuscle: string;
  previousBest: string;
  nextTarget: string;
  sets: WorkoutSet[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  gainStat: string;
  timeframe: string;
  quote: string;
  metricLabel: string;
  metricValue: string;
  verifiedLifter: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
