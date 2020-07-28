import React from "react";
import Logo from "../../assets/img/Logo.png";
import './Menu.css';
import Button from '../Button'
//import ButtonLink from "../components/ButtonLink";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DevFilx Logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Algum botão
            </Button>
        </nav>
    )
}

export default Menu;