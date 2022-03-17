import { Question } from "./question";

export interface Quiz {
    title: string;
    quizNumber: number;
    description: string;
    questions: Question[];
    achievedPoints: number;
    totalPoints: number;
    viewing: boolean;
}
