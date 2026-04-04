import FormCustomer from "../../components/customer/FormCustomer";

function RegisterCustomer() {

    const typeForm = "REGISTER";

    return (
        <div>
            <FormCustomer
                typeForm={typeForm}
            />
        </div>
    )
}

export default RegisterCustomer;