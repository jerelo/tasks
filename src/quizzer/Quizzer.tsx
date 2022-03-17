import React, { useState } from "react";
import { QuizList } from "./QuizList";
import { Quiz } from "./quiz";
import quizData from "./quizData.json";
import sketch1 from "./Slide1.png";
import sketch2 from "./Slide2.png";
import sketch3 from "./Slide3.png";
import sketch4 from "./Slide4.png";

export function Quizzer(): JSX.Element {
    const QUIZES = quizData.map((quiz): Quiz => ({ ...quiz }));

    const [quizes] = useState<Quiz[]>(QUIZES);
    return (
        <div>
            <h3>Quizzer</h3>
            <QuizList quizes={quizes}></QuizList>
            <img src={sketch1}></img>
            <img src={sketch2}></img>
            <img src={sketch3}></img>
            <img src={sketch4}></img>
        </div>
    );
}
