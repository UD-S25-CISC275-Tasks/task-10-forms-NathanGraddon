import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditing}
                onChange={() => {
                    setIsEditing(!isEditing);
                }}
            />
            {isEditing ?
                <>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={() => {
                            setIsStudent(!isStudent);
                        }}
                    />
                </>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
