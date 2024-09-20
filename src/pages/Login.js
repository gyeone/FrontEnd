import signature from '../assets/images/signature.png';
import '../styles/Login.css';
import Ad from '../components/Ad';
import {Link} from 'react-router-dom';

function Login() {
    return(
        <>
        <div className="login-header">
            <img src= {signature} width="252" height="79"/>
        </div>

        <div className="login-contents">
            <div className="login">
                <h2>로그인</h2>
            </div>

            <p><input id='id-box' type='text' placeholder='아이디'/></p>
            <p><input id='password-box' type='password' placeholder='비밀번호'/></p>
            <div className='stay-sign-in'>
                <input id='check' type='checkbox'/><h5>로그인 상태 유지</h5>
            </div>
            <Link to='/'>
                <div className='Login_button_to_main'>
                    <h4 className='Login_button_to_main-text'>로그인</h4>
                </div>
            </Link>
            <div className='find'>

                <h4>아이디 찾기</h4> 
                <h4>|</h4>
                <h4>비밀번호 찾기</h4>
                <h4>|</h4>
                <Link to='/register' id='find-register'>
                    <h4 className='find-register-text'>회원가입</h4>
                </Link>
            </div>

            <Ad/>
        </div>
        </>
    )
}
export default Login;