import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<number>(0);

    function updateNumAttempts(updateNum: number) {
        setNumAttempts(numAttempts + updateNum);
    }

    function updateNumRequest(event: ChangeEvent) {
        const requestAsNum = Number(event.target.value);
        if (!isNaN(requestAsNum)) {
            setNumRequest(requestAsNum);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Your attempts remaining: {numAttempts}</div>
            <Button
                onClick={() => updateNumAttempts(-1)}
                disabled={numAttempts < 1}
            >
                use
            </Button>
            <Button onClick={() => updateNumAttempts(numRequest)}>gain</Button>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Enter a number of attempts to request</Form.Label>
                <Form.Control type="number" onChange={updateNumRequest} />
            </Form.Group>
        </div>
    );
}
