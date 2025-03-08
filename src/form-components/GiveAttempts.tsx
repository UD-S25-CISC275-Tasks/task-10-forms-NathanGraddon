import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Control
                type="number"
                value={request}
                onChange={(e) => {
                    setRequest(e.target.value);
                }}
            />
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    const num = parseInt(request);
                    if (!isNaN(num)) setAttempts(attempts + num);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
