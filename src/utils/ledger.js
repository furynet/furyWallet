import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import {LedgerSigner} from "@cosmjs/ledger-amino";
import transactions from "./transactions";
import config from "../config";
import {useHistory} from "react-router-dom";

const interactiveTimeout = 120_000;

export async function createTransport() {
    const ledgerTransport = await TransportWebUSB.create(interactiveTimeout, interactiveTimeout);
    return ledgerTransport;
}

export const fetchAddress = async (accountNumber = "0", addressIndex = "0") => {
    const history = useHistory();
    let transport = await createTransport();
    transport.on("disconnect", () => {
        alert("ledger disconnected please login again");
        localStorage.clear();
        history.push('/');
        window.location.reload();
    });
    const signer = new LedgerSigner(transport, {
        testModeAllowed: true,
        hdPaths: [transactions.makeHdPath(accountNumber, addressIndex)],
        prefix: config.addressPrefix
    });
    const [firstAccount] = await signer.getAccounts();
    return firstAccount.address;
};
