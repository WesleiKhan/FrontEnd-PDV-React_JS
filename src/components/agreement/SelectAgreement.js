
import {useGetAgreement} from "../hook/useGetAgreement";
import {saveAgreementOnRedis} from "../../services/agreement/AgreementService";
import ButtonBack from "../Several/ButtonBack";
import styles from "../agreement/SelectAgreement.module.css";
import TableAgreements from "./TableAgreements";

function SelectAgreement() {

    const {agreements} = useGetAgreement();

    async function addAgreement(agreement) {

        try {

            const response = await saveAgreementOnRedis(agreement)

            console.log(response)
        }catch(error) {
            console.error("Erro:", error.response?.data || error.message);
        }
    }

    if (!agreements) return <p>Carregando...</p>;


    return (
        <div>
            <ButtonBack/>
            <div className={styles.parent}>
                <div className={styles.list_Agreements}>
                    <TableAgreements
                        agreements={agreements}
                        onSelectProduct={addAgreement()}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectAgreement;