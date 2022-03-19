export interface Question {
    points: number;
    body: string;
    questionNumber: number;
    published: boolean;
    correct: boolean;
    editing: boolean;
    type: string;
    expectedAnswer: string;
    userAnswer: string;
    options: string[];
}
