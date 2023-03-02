import React from 'react';
import { Modal } from 'react-bootstrap';
import "./BasicModal.scss";
import PetShop from "../../../assets/logo.png";

export default function BasicModal(props) {
    const { show, setShow, children } = props;

    return (
        <Modal className='basic-modal' show={show} onHide={() => setShow(false)} centered size='lg'>
            <Modal.Header>
                <Modal.Title>
                    <img src={PetShop} alt='PetShop' />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}
