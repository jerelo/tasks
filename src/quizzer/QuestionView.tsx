import { Question } from "./question";
import { Row, Col, Button } from "react-bootstrap";
import React from "react";

export function QuestionView({
    question
}: {
    question: Question;
}): JSX.Element {
    return (
        <div>
            <Row>
                <Col>
                    <span data-testid={"name"}>
                        Question {question.questionNumber}:{" "}
                    </span>
                    <span data-testid={"points"}>
                        {question.points}{" "}
                        {question.points > 1 ? "points" : "point"}
                    </span>
                </Col>
                <Col>{question.correct ? "Correct" : "Incorrect"}</Col>
                <Col>{question.published ? "Published" : "Unpublished"}</Col>
                <Col>
                    <Button>Edit Question</Button>
                </Col>
            </Row>
            <Row>
                <div data-testid={"body"}>{question.body}</div>
            </Row>
            <Row>
                <div>Question form will be here</div>
            </Row>
        </div>
    );
}
