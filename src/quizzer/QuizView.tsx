import { Quiz } from "./quiz";
import { Row, Col } from "react-bootstrap";
import React from "react";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <div className="border-bottom border-primary">
            <Row>
                <Col className="text-center">
                    <h4>
                        Quiz {quiz.quizNumber}: {quiz.title}
                    </h4>
                </Col>
            </Row>
            <Row>
                <div>Description: {quiz.description} </div>
                <div>Number of questions: {quiz.questions.length} </div>
                <div>
                    Current Score: {quiz.achievedPoints}/{quiz.totalPoints}
                </div>
            </Row>
        </div>
    );
}
