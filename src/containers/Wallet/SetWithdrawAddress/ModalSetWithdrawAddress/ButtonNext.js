import React from 'react';
import Button from "./../../../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {keplrSubmit} from "../../../../store/actions/transactions/keplr";
import {hideTxWithDrawAddressModal, submitFormData} from "../../../../store/actions/transactions/setWithdrawAddress";
import {SetWithDrawAddressMsg} from "../../../../utils/protoMsgHelper";
import {setTxIno} from "../../../../store/actions/transactions/common";

const ButtonNext = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(submitFormData([SetWithDrawAddressMsg(loginInfo.address,revisedAddress.value)]));
    };

    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    let revisedAddress = useSelector((state) => state.setWithdrawAddress.revisedAddress);
    const currentAddress = useSelector((state) => state.withdrawAddress.withdrawAddress);
    const memo = useSelector((state) => state.setWithdrawAddress.memo);

    const onClickKeplr = () => {
        dispatch(setTxIno({
            value:{
                modal:hideTxWithDrawAddressModal(),
                data:{
                    message:'',
                    memo:'',
                }
            }
        }));
        dispatch(keplrSubmit([SetWithDrawAddressMsg(loginInfo.address,revisedAddress.value)]));
    };

    const disable = (
        revisedAddress.error.message !== '' || currentAddress === '' || revisedAddress.value === '' ||  memo.error.message !== ''
    );

    return (
        <div className="buttons">
            <div className="button-section">
                <Button
                    className="button button-primary"
                    type="button"
                    disable={disable}
                    value="Next"
                    onClick={loginInfo.loginMode === "keplr" ? onClickKeplr : onClick}
                />
            </div>
        </div>
    );
};



export default ButtonNext;
