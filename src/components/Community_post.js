import '../styles/Community_post.css';
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

function Community_post() {
    return (  
        <>  
        <div className="community-post">
            <div className="community-post-left">
                <h4>카테고리</h4>
                <h2>제목입니다.</h2>
                <h5>(프로필) 닉네임  |  oo동  |  14분 전  |  조회 52</h5>
            </div>
            <div className="community-post-right">
                <img src=""></img>
                <h1><FaHeart /></h1> <h4>좋아요 수</h4>
                <h1><FaComment /></h1> <h4>댓글 수</h4>
            </div>
        </div>
        
        <div className="community-post">
            <div className="community-post-left">
                <h4>카테고리</h4>
                <h2>제목입니다.</h2>
                <h5>(프로필) 닉네임  |  oo동  |  14분 전  |  조회 52</h5>
            </div>
            <div className="community-post-right">
                <img src=""></img>
                <h1><FaHeart /></h1> <h4>좋아요 수</h4>
                <h1><FaComment /></h1> <h4>댓글 수</h4>
            </div>
        </div>
        </>
    )
}

export default Community_post;