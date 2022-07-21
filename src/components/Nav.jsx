import React from "react";
import "../styles/Nav.css";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li>
                    <button className="nav-list__btn">Lista de Compra</button>
                </li>
                <li>
                    <button className="nav-list__btn">Editar Lista</button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
