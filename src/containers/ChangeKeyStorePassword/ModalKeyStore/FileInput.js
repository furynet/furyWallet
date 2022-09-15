import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setTxKeyStore} from "../../../store/actions/transactions/keyStore";
import {ValidationFileTypeCheck} from "../../../utils/validations";

const FileInput = () => {
    const [fileName, setFileName] = useState('No file chosen');
    const error = useSelector((state) => state.keyStore.keyStore.error);
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const onChange = (event) => {
        const file = event.target.files[0];
        console.log(file,  "sss");
        if(file) {
            setFileName(file.name);
            dispatch(setTxKeyStore(
                {
                    value: file,
                    error: ValidationFileTypeCheck(file.name)
                }));
        }
    };
    return (
        <div className="form-field upload">
            <p className="label"> {t("KEY_STORE_FILE")}</p>
            <div className="custom-file-section flex-fill">
                <div>
                    <div className="custom-file">
                        <p className="file-button"> {t("CHOOSE_FILE")}</p>
                        <p className="file-name">{fileName}</p>
                    </div>
                    <Form.File name="uploadFileS" onChange={onChange}
                        className="file-upload" accept=".json" required={true}/>
                </div>
                <p className="input-error">{error.message}</p>
            </div>
        </div>
    );
};


export default FileInput;
