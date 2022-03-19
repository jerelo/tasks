import React from "react";
//import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import { render, screen } from "@testing-library/react";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer Renders", () => {
        const inputBox = screen.getByText(/Quizzer/i);
        expect(inputBox).toBeInTheDocument();
    });
    test("The quiz list displays the correct elements", () => {
        const description = screen.getAllByTestId("description")[0];
        const questionCount = screen.getAllByTestId("questionCount")[0];
        const title = screen.getAllByTestId("title")[0];

        expect(description).toBeInTheDocument();
        expect(questionCount).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
    test("Each quiz shows a name, body, and points", () => {
        const viewQuizButton = screen.getAllByRole("button", {
            name: /View Quiz/i
        })[0];
        viewQuizButton.click();
        const name = screen.getAllByTestId("name")[0];
        const body = screen.getAllByTestId("body")[0];
        const points = screen.getAllByTestId("points")[0];

        expect(name).toBeInTheDocument();
        expect(body).toBeInTheDocument();
        expect(points).toBeInTheDocument();
    });
});
