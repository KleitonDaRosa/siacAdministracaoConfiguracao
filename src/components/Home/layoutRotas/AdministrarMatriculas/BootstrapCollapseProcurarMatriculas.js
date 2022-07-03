import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./estilo.css"


export default function Procurar({alunos}) {
    const [open, setOpen] = useState(false);
    //----------------------- Opter os alunos do backend --------------------------------------------------------------


    //------------------------------------------------------------------------------------------------------------------

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
                    {
                       alunos.length > 0 ? (
                            alunos.map((aluno) => {
                                if(aluno.nome_aluno === "Jose Rui"){
                                    return  <p>{aluno.nome_aluno}</p>
                                }
                            })
                        ) : <p>Ainda nao ha dados</p>

                    }
                </div>
            </Collapse>
        </div>
    );
}

