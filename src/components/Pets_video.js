import '../styles/Pets_video.css';
import { useState } from 'react';
import { LuShare2 } from "react-icons/lu";
import Share_screen from '../components/Share_screen';

function Pets_video() {

    let [state, setState] = useState(false);

    return(

        <div classname="Pets_video">
            <div className="Pets_video_screen">

            </div>
            <div className="Pets_video_information">
                <div className="Pets_video_title">
                    <h3>제목</h3>
                </div>
                <div className='pets-share-icon' onClick={()=>{setState(!state)}}><h2><LuShare2 /></h2></div>
                    {state === true ? <Share_screen/>: null}
                <div className="Pets_video_views">
                    <h5>조회 수</h5>
                </div>
            </div>
            
        </div>

    )
}
export default Pets_video;