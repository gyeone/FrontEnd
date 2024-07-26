import kakao from '../assets/images/kakao.png';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import naver_mail from '../assets/images/naver_mail.png';
import x from '../assets/images/x.png';
import '../styles/Share_screen.css';

function Share_screen() {
    return(
        <div className="share">
            <div className="share-title">
                <h3>공유하기</h3>
            </div>
            <div className='share-app'>
                <div className='kakao-app'>
                    <img src={kakao} width="44px" height="44px"></img>
                    <h5>카카오톡</h5>
                </div>
                <div className='instagram-app'>
                    <img src={instagram} width="44px" height="44px"></img>
                    <h5>인스타그램</h5>
                </div>
                <div className='facebook-app'>
                    <img src={facebook} width="44px" height="44px"></img>
                    <h5>페이스북</h5>
                </div>
                <div className='naver_mail-app'>
                    <img src={naver_mail} width="44px" height="44px"></img>
                    <h5>네이버 메일</h5>
                </div>
                <div className='x'>
                    <img src={x} width="44px" height="44px"></img>
                    <h5>X</h5>
                </div>
            </div>
            <div className='share-address'>
                <div className='address'> 
                    <h4>address</h4>
                </div>

                <div className='copy'>
                    <h4>복사</h4>
                </div>
            </div>
        </div>
    )
}

export default Share_screen; 