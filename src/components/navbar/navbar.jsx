import { React, useState} from "react";
import "./styles.css";
import Icon  from "../../image/high-contrast.png"
import Logo from "../../image/news.png"
import Light from "../../image/light.png"
import Dark from "../../image/dark.png"
import Facebook from "../../image/facebook.png"
import Twitter from "../../image/twitter.png"
import Instagram from "../../image/instagram.png"
import LinkedIn from "../../image/linkedin.png"
import TikTok from "../../image/tiktok.png"
import YouTube from "../../image/youtube.png"

const Navbar = ({onToggleContrast, sizeUp, sizeDown, onToggleTheme, theme}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <img src={Logo} alt="Logo"/>
            <h1>TechnoNews</h1>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="navbar-button size" onClick={sizeUp}>A+</button>
                <button className="navbar-button size" onClick={sizeDown}>A-</button>
                <button className="navbar-button" onClick={onToggleTheme}>
                    <img src={theme === 'dark' ? Dark : Light} alt={theme === 'dark' ? 'Light mode' : 'Dark mode'}/>
                </button>
                <button className="navbar-button" onClick={onToggleContrast}>
                    <img src={Icon} alt="Contrast mode"/>
                </button>
            </div>
            <div className="button-container">
                <button className="navbar-button size"><img src={Facebook}/></button>
                <button className="navbar-button size"><img src={Twitter}/></button>
                <button className="navbar-button size"><img src={Instagram}/></button>
                <button className="navbar-button size"><img src={YouTube}/></button>
                <button className="navbar-button size"><img src={LinkedIn}/></button>
                <button className="navbar-button size"><img src={TikTok}/></button>
                <button className="menu-button navbar-button size" onClick={toggleMenu}><img src={Icon} /></button>
            </div>
        </nav>
    );
}

export default Navbar;