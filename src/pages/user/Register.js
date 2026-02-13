import FormUser from "../../components/user/FormUser";


function Register(){

    const typeForm = "REGISTER";

    return (
        <div>
            <FormUser typeForm={typeForm}/>
        </div>
    )
}

export default Register;