import React from "react";
//import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react"; //remove this and uncomment the previous

import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
});
