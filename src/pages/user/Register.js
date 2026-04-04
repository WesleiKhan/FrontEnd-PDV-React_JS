import FormEmployee from "../../components/employee/FormEmployee";


function Register(){

    const typeForm = "REGISTER";

    return (
        <div>
            <FormEmployee typeForm={typeForm}/>
        </div>
    )
}

export default Register;