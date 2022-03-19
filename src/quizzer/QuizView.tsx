import { Quiz } from "./quiz";
import { Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import { QuestionList } from "./QuestionList";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [quizVisible, setQuizVisible] = useState<boolean>(false);
    function changeQuizVisible(): void {
        setQuizVisible(!quizVisible);
    }
    return (
        <div className="border-bottom border-primary">
            <Row>
                <Col className="text-center">
                    <h4 data-testid={"title"}>
                        Quiz {quiz.quizNumber}: {quiz.title}
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <span data-testid={"description"}>
                            Description: {quiz.description}
                        </span>
                    </div>
                    <div data-testid={"questionCount"}>
                        Number of questions: {quiz.questions.length}{" "}
                    </div>
                    <div>
                        Current Score: {quiz.achievedPoints}/{quiz.totalPoints}
                    </div>
                </Col>
                <Col>
                    <Button onClick={changeQuizVisible}> View Quiz </Button>
                </Col>
                <Row>{quizVisible && <QuestionList quiz={quiz} />}</Row>
            </Row>
        </div>
    );
}
