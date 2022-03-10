import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="red"
                label={<span style={{ backgroundColor: "red" }}>red</span>}
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="blue"
                value="blue"
                label={<span style={{ backgroundColor: "blue" }}>blue</span>}
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="green"
                label={<span style={{ backgroundColor: "green" }}>green</span>}
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="orange"
                label={
                    <span style={{ backgroundColor: "orange" }}>orange</span>
                }
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="purple"
                label={
                    <span style={{ backgroundColor: "purple" }}>purple</span>
                }
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="cyan"
                label={<span style={{ backgroundColor: "cyan" }}>cyan</span>}
                value="cyan"
                checked={color === "cyan"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="magenta"
                label={
                    <span style={{ backgroundColor: "magenta" }}>magenta</span>
                }
                value="magenta"
                checked={color === "magenta"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="white"
                label={<span style={{ backgroundColor: "white" }}>white</span>}
                value="white"
                checked={color === "white"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="black"
                label={<span style={{ backgroundColor: "black" }}>black</span>}
                value="black"
                checked={color === "black"}
            />
            <div style={{ backgroundColor: color }} data-testid="colored-box">
                You have chosen
                <span> {color}</span>.
            </div>
        </div>
    );
}
