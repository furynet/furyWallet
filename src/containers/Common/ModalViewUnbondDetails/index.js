import {Form, Modal} from 'react-bootstrap';
import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {connect} from "react-redux";

const ModalViewUnbondDetails = (props) => {
    const {t} = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleModal = () => {
        setShow(true);
    };

    return (
        <>
            <Modal
                animation={false}
                centered={true}
                show={show}
                backdrop="static"
                size="lg"
                className="modal-custom list-modal"
                onHide={handleClose}>
                <Modal.Header className="result-header" closeButton>
                    Unbonding Schedule
                </Modal.Header>
                <Modal.Body className="list-modal-body">
                            <div className="unbonding-schedule-list-header">
                                <p>To be Unbonded</p>
                                <p>Date</p>
                            </div>
                    {props.list ?
                        props.list.map((item, index) => {
                            return (
                                item.entries.length ?
                                    item.entries.map((entry, entryIndex) => {
                                        return (
                                            <div className="unbonding-schedule-list">
                                                <p><span className="amount">{entry.balance / 1000000} XPRT</span></p>
                                                <p><span className="date">{new Date (entry["completion_time"]).toUTCString()}</span></p>
                                            </div>
                                        )
                                    })
                                    : ""
                            )
                        }) : null
                    }
                </Modal.Body>
            </Modal>
            <span className="view-button" onClick={handleModal}>View</span>
        </>

    );
};


const stateToProps = (state) => {
    return {
        list: state.unbond.list,
    };
};


export default connect(stateToProps)(ModalViewUnbondDetails);
