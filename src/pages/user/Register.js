import FormEmployee from "../../components/user/FormEmployee";


function Register(){

    const typeForm = "REGISTER";

    return (
        <div>
            <FormEmployee typeForm={typeForm}/>
        </div>
    )
}

export default Register;