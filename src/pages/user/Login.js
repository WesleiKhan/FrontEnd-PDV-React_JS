import FormEmployee from "../../components/user/FormEmployee";

function Login() {

    const typeForm = "LOGIN";

    return (
        <div>
            <FormEmployee typeForm={typeForm} />
        </div>
    )
}
export default Login;