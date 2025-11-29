import { assets } from "../../assets/data/assets.js";
import { menuitems } from "../../assets/data/menu-item.js";
import "./Navbar.css";
import "./ModalWindow/ModalWindow.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalWindow from "./ModalWindow/ModalWindow.jsx";
import LocationSearch from "./LocationSearch/LocationSearch.jsx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    return (
        <header className="navbar">
            <div className="navbar__left">
                <img
                    className="navbar__logo"
                    src={assets.i_loom_logo}
                    alt="i loom logo"
                />
                <button
                    className="navbar__burger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img
                        className="navbar__burger--logo"
                        src={assets.burger_menu}
                        style={{ transform: menuOpen ? "rotate(360deg)" : "rotate(0deg)" }}
                        alt="burger menu logo"
                    />
                </button>
                {menuOpen && (
                    <div className="menu_open__container">
                        <div className="menu_open__wrapper">
                            <nav className="menu_open__list">
                                { menuitems.map(({ path, label, submenu }) => (
                                    <div key={path} className="menu_open__list-item">
                                        <NavLink
                                            onClick={() => {
                                                if (!submenu) setMenuOpen(false);
                                                setActiveSubmenu(activeSubmenu === path ? null : path);
                                            }}
                                            className="menu_open__list-item-link block w-full px-6 py-3 rounded-xl m-[12px] text-[#ffffff] text-[20px] tracking-wide bg-gradient-to-r from-[#fc8bd1]/30 to-[#fc8bd1]/10 transition-all duration-300 ease-in-out no-underline font-[600]"
                                        >
                                            <span className="menu_open__header-label">
                                                {label}
                                                {submenu && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setActiveSubmenu(activeSubmenu === path ? null : path);
                                                        }}
                                                        className="menu_open__header-button"
                                                    >
                                                        <img
                                                            src={assets.plus}
                                                            alt="Plus"
                                                            className={`menu_open__header-button-logo ${
                                                                activeSubmenu === path ? "rotate-45" : ""
                                                            }`}
                                                        />
                                                    </button>
                                                )}
                                            </span>
                                        </NavLink>
                                        {activeSubmenu === path && submenu && (
                                            <div className="submenu__container">
                                                <div className="submenu__wrapper">
                                                    {submenu.map(({ path, label }) => (
                                                        <NavLink
                                                            key={path}
                                                            to={path}
                                                            onClick={() => {
                                                                setMenuOpen(false);
                                                                setActiveSubmenu(null);
                                                            }}
                                                            className="submenu__item"
                                                        >
                                                            {label}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </div>
            <LocationSearch />
            <div className="navbar__right">
                <div className="navbar__icon">
                    <ModalWindow />
                </div>
                <div className="navbar__icon">
                    <img src={assets.favorites} alt="Favorites"/>
                    <span className="navbar__badge">2</span>
                </div>
                <div className="navbar__icon">
                    <img src={assets.shopping_bag} alt="Cart"/>
                    <span className="navbar__badge">2</span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;