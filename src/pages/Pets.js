import Header from '../components/Header';
import Footer from '../components/Footer';
import Share_screen from '../components/Share_screen';
import pets_icon from '../assets/images/pets_icon.png'
import '../styles/Pets.css';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

function Pets() {
    return(
        <div className='pets'>
            <div className='pets-title'>
                <h3><img src={pets_icon} width="50px" height="48px"/>펫츠</h3>
            </div>

            <div className='video'>

            </div>

            <div className='addition'>
                <div className='pets-heart-icon'><h1><FaRegHeart /></h1></div>
                <h3>하트 수</h3>
                <div className='pets-comment-icon'><h1><FaRegComment /></h1></div>
                <h3>댓글 수</h3>
                <div className='pets-share-icon'><h1><LuShare2 /></h1></div>
                <Share_screen/>
                <h3>공유 수</h3>
            </div>

            <div className='scroll'>
                <div className='pets-up-arrow-icon'><h1><FaArrowCircleUp /></h1></div>
                <div className='pets-down-arrow-icon'><h1><FaArrowCircleDown /></h1></div>
            </div>
        </div>

    )
}
export default Pets;