import {useState} from "react";
import {
    registerAgreement,
    updateAgreement
} from "../../services/agreement/AgreementService";

function FormAgreement({typeForm, id}) {

    const [percentage, setPercentage] = useState(0);
    const [status, setStatus] = useState("");
    async function agreementEvent(e) {
        e.preventDefault();

        const data = {
            percentage: Number(percentage),
        }

        if (typeForm === "UPDATE") {
            if (status  && status.trim() !== "") {
                data.status = status;
            }
        }

        if (typeForm === "REGISTER") {
            const response = await registerAgreement(id, data);

            console.log(response);
        } else {
            const response = await updateAgreement(id, data);

            console.log(response);

            window.location.reload();
        }
    }

    return (
        <div>
            <form onSubmit={agreementEvent}>
                <input
                    type="number"
                    step="0.01"
                    value={percentage}
                    placeholder="Porcentagem"
                    onChange={e => setPercentage(e.target.value)}
                />

                {(typeForm === "UPDATE") && (
                    <input
                        type="text"
                        value={status}
                        placeholder="Status"
                        onChange={e => setStatus(e.target.value)}
                    />
                ) }

                <button type="submit">{typeForm}</button>
            </form>

        </div>
    )
}

export default FormAgreement;