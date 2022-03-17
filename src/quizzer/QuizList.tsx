import React from "react";
import { Quiz } from "./quiz";
import { QuizView } from "./QuizView";
export function QuizList({ quizes }: { quizes: Quiz[] }): JSX.Element {
    return (
        <div>
            {quizes.map((quiz: Quiz) => (
                <div key={quiz.title}>
                    <QuizView quiz={quiz}></QuizView>
                </div>
            ))}
        </div>
    );
}
