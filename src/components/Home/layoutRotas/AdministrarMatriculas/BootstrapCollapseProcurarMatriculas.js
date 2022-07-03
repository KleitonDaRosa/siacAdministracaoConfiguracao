import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./estilo.css"


export default function Procurar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={"btnButstrarpchange"}>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Procurar
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <br/>
                    <p>Ainda nao ha dados</p>
                </div>
            </Collapse>
        </div>
    );
}

