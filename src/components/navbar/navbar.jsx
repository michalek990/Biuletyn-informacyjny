import React from "react";
import "./styles.css";
import Icon  from "../../image/high-contrast.png"
import Logo from "../../image/news.png"
import Light from "../../image/light.png"
import Dark from "../../image/dark.png"

const Navbar = ({onToggleContrast, sizeUp, sizeDown, onToggleTheme, theme}) => (
    <nav className="navbar">
        <img src={Logo} alt="Logo"/>
        <h1>TechnoNews</h1>
        <div className="button-container"> {/* Dodajemy ten kontener */}
            <button className="navbar-button size" onClick={sizeUp}>A+</button>
            <button className="navbar-button size" onClick={sizeDown}>A-</button>
            <button className="navbar-button" onClick={onToggleTheme}>
                <img src={theme === 'dark' ? Dark : Light} alt={theme === 'dark' ? 'Light mode' : 'Dark mode'}/>
            </button>
            <button className="navbar-button" onClick={onToggleContrast}><img src={Icon} alt="Logo"/></button>
        </div>
    </nav>
);

export default Navbar;