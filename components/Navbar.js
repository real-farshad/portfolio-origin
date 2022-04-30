import Logo from "./Logo";
import NavLink from "./NavLink";
import RegularBtn from "./RegularBtn";
import st from "../styles/Navbar.module.scss";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);

    useEffect(() => {
        if (menuOpen)
            setTimeout(() => {
                setMenuOpen(false);
                setCloseMenu(false);
            }, 500);
    }, [closeMenu]);

    return (
        <div className={st["navbar"]}>
            <Logo />

            <div
                className={st["navbar__menu-btn"]}
                onClick={() => setMenuOpen(true)}
            >
                <RegularBtn>Menu</RegularBtn>
            </div>

            <div
                className={`${st["navbar__menu"]} ${
                    menuOpen ? ` ${st["navbar__menu--show"]}` : ""
                } ${closeMenu ? ` ${st["navbar__menu--close"]}` : ""}`}
            >
                <div className={st["navbar__menu-bg"]} />

                <div className={st["navbar__menu-content-container"]}>
                    <div>
                        <div
                            className={st["navbar__close-btn"]}
                            onClick={() => setCloseMenu(true)}
                        >
                            <RegularBtn>Close Menu</RegularBtn>
                        </div>

                        <ul className={st["navbar__navigation"]}>
                            <li className={st["navbar__nav-link"]}>
                                <NavLink to="#about">About</NavLink>
                            </li>

                            <li className={st["navbar__nav-link"]}>
                                <NavLink to="#projects">Projects</NavLink>
                            </li>

                            <li className={st["navbar__nav-link"]}>
                                <NavLink to="#contact">Contact</NavLink>
                            </li>

                            <li className={st["navbar__nav-link"]}>
                                <NavLink to="#socials">Socials</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
