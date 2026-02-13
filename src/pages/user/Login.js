import FormUser from "../../components/user/FormUser";

function Login() {

    const typeForm = "LOGIN";

    return (
        <div>
            <FormUser typeForm={typeForm} />
        </div>
    )
}
export default Login;