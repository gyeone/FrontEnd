import { NavLink } from 'react-router-dom';
import signature from '../assets/images/signature.png';
import pink_logo from '../assets/images/pink_logo.png';
import '../styles/Header.css';
import { FaSearch } from "react-icons/fa";


function Header() {
    return(
        <div className="header">
            <div className='header-logo'>
                <NavLink to= '/'><img src={signature} width="233px" height="73.12px"/></NavLink>
            </div>
            <div className='header-menu'>
                <div className='header-menu-community'>
                    <NavLink to='/community'><h2>커뮤니티</h2><img src={pink_logo} className="pinklogo"/></NavLink>
                </div>
                <div className='header-menu-gallery'>
                    <NavLink to='/gallery'><h2>반려동물 갤러리</h2><img src={pink_logo} className="pinklogo"/></NavLink>
                </div>
                <div className='header-menu-pets'>
                    <NavLink to='/pets'><h2>펫츠</h2><img src={pink_logo} className="pinklogo"/></NavLink>
                </div>
                <div className='header-menu-search'>
                    <h2><FaSearch /></h2><input id='searchbox' type='search'/>
                </div>
            </div>
        </div>
    )
}
export default Header;