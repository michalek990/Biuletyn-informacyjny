import React from "react";
import "./styles.css";
import IconFacebook from "../../image/facebook.png";
import IconTwitter from "../../image/twitter.png";
import IconInstagram from "../../image/instagram.png";
import TikTok from "../../image/tiktok.png";
import YouTube from "../../image/youtube.png";
import Linkedin from "../../image/linkedin.png";

const Footer = () => (
    <footer>
        <p>&copy; 2024 TechnoNews. Wszelkie prawa zastrzeżone.</p>
        <div className="footer-section social-icons">
            <a href="#"><img src={IconFacebook} alt="Facebook"/></a>
            <a href="#"><img src={IconTwitter} alt="Twitter"/></a>
            <a href="#"><img src={IconInstagram} alt="Instagram"/></a>
            <a href="#"><img src={YouTube} alt="Facebook"/></a>
            <a href="#"><img src={Linkedin} alt="TikTok"/></a>
            <a href="#"><img src={TikTok} alt="Twitter"/></a>
        </div>
    </footer>
);

export default Footer;