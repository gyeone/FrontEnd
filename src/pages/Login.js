import signature from '../assets/images/signature.png';
import '../styles/Login.css';
import Ad from '../components/Ad';

function Login() {
    return(
        <>
        <div classname="login-header">
            <img src= {signature} width="252" height="79"/>
        </div>

        <div classname="login-contents">
            <div classname="login">

            </div>

            <Ad/>
        </div>
        </>
    )
}
export default Login;