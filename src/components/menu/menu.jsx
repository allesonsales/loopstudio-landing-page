import { useState } from "react";
import './style.css'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState (false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav>
            <div className="navContainer">
                <div className="logo">
                    <img src="/loopstudio-landing-page/logo.svg" alt="loopstudios" />
                </div>
                <div className="menuMobile" onClick={toggleMenu}>
                    {menuOpen ? (
                        <i class="bi bi-x-lg"></i>
                    ) : (
                        <i class="bi bi-list"></i>
                    )}
                    <ul style={{display: (menuOpen ? 'flex' : 'none')}}>
                        <a href="#vr">
                        <li>About</li>
                        </a>
                        <li>Carrers</li>
                        <li>Events</li>
                        <a href="#creations">
                        <li>Products</li>
                        </a>
                        <a href="#footer">
                        <li>Suport</li>
                        </a>
                    </ul>
                </div>
                <div className="menuDesktop">
                    <ul>
                    <a href="#vr">
                        <li>About</li>
                        </a>
                        <li>Carrers</li>
                        <li>Events</li>
                        <a href="#creations">
                        <li>Products</li>
                        </a>
                        <a href="#footer">
                        <li>Suport</li>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 

export default Menu
