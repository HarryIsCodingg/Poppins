import './NavBar.css';
import LocationBar from "./rental-location-bar/LocationBar";
import RightColumn from "./login-signup/RightColumn";
import logo from '../../assets/images/logo.png';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigateTo = useNavigate();
    const navigateToHome = () => {
        navigateTo('/');
    }

    return (
        <div className='nav-bar flex row'>
            <div className='nav-bar-column-1'>
                <img src={logo} className='logo cursor' onClick={navigateToHome}/>
            </div>
            <LocationBar />
            <RightColumn />
        </div>
    )
}

export default NavBar;
