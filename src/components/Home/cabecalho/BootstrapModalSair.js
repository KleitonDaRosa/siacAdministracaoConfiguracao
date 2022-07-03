import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import history from "../../../services/history";

export default function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <li className={"pointclick nav-item"}>
                <a onClick={handleShow}>
                    Sair
                </a>
            </li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deseja mesmo Sair ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Não
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        localStorage.removeItem("isAuthenticated")
                        history.push("/")
                    }}>
                        Sim
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

