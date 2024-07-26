import signature from '../assets/images/signature.png';
import '../styles/Login.css';
import Ad from '../components/Ad';

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

            <p><input id='idbox' type='text' placeholder='아이디'/></p>
            <p><input id='passwordbox' type='password' placeholder='비밀번호'/></p>
            <div className='stay-sign-in'>
                <input id='check' type='checkbox'/><h5>로그인 상태 유지</h5>
            </div>
            <input id='submitbox' type='submit'/>
            <div className='find'>
                <h4>아이디 찾기 | 비밀번호 찾기 | 회원가입</h4>
            </div>

            <Ad/>
        </div>
        </>
    )
}
export default Login;