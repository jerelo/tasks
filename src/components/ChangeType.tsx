import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [answer, setAnswer] = useState<QuestionType>("short_answer_question");

    function changeAnswerType(): void {
        if (answer === "short_answer_question") {
            setAnswer("multiple_choice_question");
        } else {
            setAnswer("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeAnswerType}>Change Type</Button>
            {answer === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
