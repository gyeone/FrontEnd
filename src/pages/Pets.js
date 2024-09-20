import Share_screen from '../components/Share_screen';
import pets_icon from '../assets/images/pets_icon.png'
import '../styles/Pets.css';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { useState } from 'react';

function Pets() {

    let [state, setState] = useState(false);

    return(
        <div className='pets'>
            <div className='pets-title'>
                <img src={pets_icon} width="50px" height="48px"/><h3>펫츠</h3>
            </div>

            <div className='video'>
                <div className='video-information'>
                    <div className='video-title'>
                        <h3>제목</h3>
                    </div>
                    <div className='video-views'>
                        <h5>조회 수</h5>
                    </div>
                    <div className='video-playbar'/>
                </div>
            </div>

            <div className='addition'>
                <div className='pets-heart-icon'><h2><FaRegHeart /></h2></div>
                <h5>하트 수</h5>
                <div className='pets-comment-icon'><h2><FaRegComment /></h2></div>
                <h5>댓글 수</h5>
                <div className='pets-share'>
                    <div className='pets-share-icon' onClick={()=>{setState(!state)}}><h2><LuShare2 /></h2></div>
                    {state === true ? <Share_screen/>: null}
                </div>
                <h5>공유 수</h5>
            </div>

            <div className='scroll'>
                <div className='pets-up-arrow-icon'><h1><FaArrowCircleUp /></h1></div>
                <div className='pets-down-arrow-icon'><h1><FaArrowCircleDown /></h1></div>
            </div>
        </div>

    )
}
export default Pets;