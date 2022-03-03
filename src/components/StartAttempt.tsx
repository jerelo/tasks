import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function addOne(): void {
        setNumAttempts(numAttempts + 1);
    }

    function subOne(): void {
        setNumAttempts(numAttempts - 1);
        setInProgress(true);
    }

    function endQuiz(): void {
        setInProgress(false);
    }

    return (
        <div>
            <div>
                Number of attempts: <span>{numAttempts}</span>
            </div>
            <div>
                <Button
                    onClick={subOne}
                    disabled={numAttempts === 0 || inProgress}
                >
                    Start Quiz
                </Button>
                <Button onClick={endQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={addOne} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
