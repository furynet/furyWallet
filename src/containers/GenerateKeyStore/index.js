import React, {useContext, useState} from "react";
import {
    Form,
     Modal
} from "react-bootstrap";
import wallet from "../../utils/wallet";
import {useHistory} from "react-router-dom";
import GeneratePrivateKey from "../Common/GeneratePrivateKey";
import {useTranslation} from "react-i18next";

const GenerateKeyStore = (props) => {
    const {t} = useTranslation();
    const [show, setShow] = useState(true);
    const history = useHistory();
    const [showFaq, setShowFaq] = useState(false);
    const [userMnemonic, setUserMnemonic] = useState("");
    const [importMnemonic, setImportMnemonic] = useState(true);
    const [mnemonicForm, setMnemonicForm] = useState(true);
    const [advancedForm, setAdvancedForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [generateKey, setGenerateKey] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        const responseData = wallet.createWallet(event.target.mnemonic.value);
        if (responseData.error) {
            setErrorMessage(responseData.error);
        } else {
            setUserMnemonic(event.target.mnemonic.value);
            setGenerateKey(true);
            setMnemonicForm(false);
            setErrorMessage("");
            setShow(false);
        }
    };

    const handlePrivateKey = (value) => {
        setImportMnemonic(value);
        setErrorMessage("");
    };

    const handleRoute = (key) => {
        if (key === "generateKey") {
            setGenerateKey(true);
            setAdvancedForm(false)
        }
        if (key === "hideGenerateKeyStore") {
            setGenerateKey(false);
            setMnemonicForm(true);
            setShow(true);
        }

    };


    const handleClose = () => {
        setShow(false);
        props.setShowKeyStore(false);
        if (props.name === "createWallet") {
            props.setShowImportWallet(false);
            props.handleClose()
        } else if (props.name === "homepage") {
            props.setRoutName("")
        }
    };

    return (
        <>
            <Modal backdrop="static" show={show} onHide={handleClose} centered
                   className="create-wallet-modal large seed">
                {
                    mnemonicForm ?
                        <>
                            <Modal.Header closeButton>
                                <h3 className="heading">Generate KeyStore File</h3>
                            </Modal.Header>
                            <div className="create-wallet-body import-wallet-body">
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-field">
                                        <p className="label">{t("ENTER_MNEMONIC")}</p>
                                        <Form.Control as="textarea" rows={3} name="mnemonic"
                                                      placeholder={t("SEED_PHRASE")}
                                                      required={true}/>
                                    </div>

                                    {errorMessage !== ''
                                        ? <p className="form-error">{errorMessage}</p>
                                        : null

                                    }

                                    <div className="buttons">
                                        <button className="button button-primary">{t("NEXT")}</button>
                                    </div>
                                </Form>

                            </div>
                        </>
                        : null
                }

            </Modal>

            {generateKey ?
                <GeneratePrivateKey mnemonic={userMnemonic} handleRoute={handleRoute} setGenerateKey={setGenerateKey}
                                    routeValue="hideGenerateKeyStore" formName="Generate KeyStore File" handleClose={handleClose}/>
                : null
            }
        </>

    );
};
export default GenerateKeyStore;
