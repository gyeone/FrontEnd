import my_profile from '../assets/images/my_profile.png';
import '../styles/Login_status_off.css';
import {Link} from 'react-router-dom';

function Login_status_off() {
    return(
        <div className="Login_status_off">
            <h3>로그인 후 펫스토리와 함께해요 :)</h3>
            <img src={my_profile} width='150px' height='150px'/>
            
            <Link to='/login'>
                <div className='Login_button'>
                    <h4 className='Login'>로그인</h4>
                </div>
            </Link>
        </div>
    )
}

export default Login_status_off;