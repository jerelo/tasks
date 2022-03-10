import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: ChangeEvent) {
        setEdit(event.target.checked);
    }

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateStudent(event: ChangeEvent) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="isEditCheck"
                label="Flip to start/end editing"
                checked={edit}
                onChange={updateEdit}
            />
            <Form.Group controlId="userName" hidden={!edit}>
                <Form.Label>Your name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="isStudentCheck"
                label={<span>{edit && "Are you a student?"}</span>}
                checked={student}
                onChange={updateStudent}
                hidden={!edit}
            />

            {!edit && (
                <div>
                    {name} is {student ? "" : "not"} a student
                </div>
            )}
        </div>
    );
}
