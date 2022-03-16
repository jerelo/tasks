import React from "react";
import sketch1 from "./Slide1.png";
import sketch2 from "./Slide2.png";
import sketch3 from "./Slide3.png";
import sketch4 from "./Slide4.png";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <img src={sketch1}></img>
            <img src={sketch2}></img>
            <img src={sketch3}></img>
            <img src={sketch4}></img>
        </div>
    );
}
