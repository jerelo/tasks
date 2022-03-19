import React from "react";
import { Quiz } from "./quiz";
import { Question } from "./question";
import { QuestionView } from "./QuestionView";
export function QuestionList({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <div>
            {quiz.questions.map((question: Question) => (
                <div key={question.questionNumber}>
                    <QuestionView question={question}></QuestionView>
                </div>
            ))}
        </div>
    );
}
