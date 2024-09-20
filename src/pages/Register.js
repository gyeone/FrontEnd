import '../styles/Register.css';
import signature from '../assets/images/signature.png';
import {Link} from 'react-router-dom';

function Register() {
    return(
        <div className='register'>
            <div className="register-header">
                <img src= {signature} width="252" height="79"/>
            </div>
            <div className='register-title'>
                <h2>회원가입</h2>
            </div>
            <div className='division'/>
            <div className='register-content'>
                <div className='register-content-left'>
                    <div className='register-content-email'>
                        <h3>이메일</h3>
                        <div className='email'>
                            <input id='emailbox' type='text' placeholder='이메일 주소'/>
                            <h5>중복확인</h5>
                        </div>
                    </div>
                    <div className='register-content-password'>
                        <h3>비밀번호</h3>
                        <input id='passwordbox' type='password' placeholder='비밀번호'/>
                    </div>
                </div>
                <div className='register-content-right'>    
                    <div className='register-content-nickname'>
                        <h3>닉네임</h3>
                        <div className='nickname'>
                            <input id='nicknamebox' type='text' placeholder='닉네임'/>
                            <h5>중복확인</h5>
                        </div>
                    </div>  
                    <div className='register-content-verify-password'>
                        <h3>비밀번호 확인</h3>
                        <input id='verify-passwordbox' type='password' placeholder='비밀번호 확인'/>
                    </div>
                </div>          
            </div>
            <Link to='/login'>
                <div className='register-complete'>
                    <h4 className='register-complete-text'>회원가입</h4>
                </div>    
            </Link>
            <div className='division'/>

        </div>
    )
}
export default Register; 