import "./ModalWindow.css";
import "../Navbar.css";
import { assets } from "../../../assets/data/assets.js";
import { useState } from "react";

const ModalWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    }

    return(
        <>
            <img src={assets.user} onClick={openModal} alt="User"/>
            {isOpen && (
                <div
                    className="modal-overlay"
                    onClick={closeModal}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-button"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <div className="tabs">
                            <div className="tab__header">
                                <div
                                    className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('login')}
                                >
                                    Войти
                                </div>
                                <div
                                    className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('register')}
                                >
                                    Зарегистрироваться
                                </div>
                            </div>
                            <div className="tab__content">
                                {activeTab === 'login' && (
                                    <div
                                        className="tab__content-wrapper active"
                                        id="login"
                                    >
                                        <form
                                            className="form"
                                        >
                                            <label
                                                className="tab-form__label"
                                                htmlFor="email"
                                            >
                                                Почта
                                            </label>
                                            <input
                                                className="tab-form__input"
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                            <label
                                                className="tab-form__label"
                                                htmlFor="password"
                                            >
                                                Пароль
                                            </label>
                                            <input
                                                className="tab-form__input"
                                                type="password"
                                                id="password"
                                                name="password"
                                                required
                                            />
                                            <a
                                                href="#"
                                                className="forgot"
                                            >
                                                Забыли пароль?
                                            </a>
                                            <button
                                                className="tab-form__submit"
                                                type="submit"
                                            >
                                                Войти
                                            </button>
                                        </form>
                                        <p
                                            className="google-auth"
                                        >
                                            Войти через
                                        </p>
                                        <button
                                            className="google-login"
                                        >
                                            <img
                                                className="google-login__icon"
                                                src={assets.google_icon}
                                                alt="Google"
                                            />
                                        </button>
                                    </div>
                                )}
                                {activeTab === 'register' && (
                                    <div
                                        className="tab__content-wrapper active"
                                        id="register"
                                    >
                                        <form
                                            className="form"
                                        >
                                            <label
                                                className="tab-form__label"
                                                htmlFor="new-email"
                                            >
                                                Почта
                                            </label>
                                            <input
                                                className="tab-form__input"
                                                type="email" id="new-email"
                                                name="new-email"
                                                required
                                            />
                                            <label
                                                className="tab-form__label"
                                                htmlFor="new-password"
                                            >
                                                Пароль
                                            </label>
                                            <input
                                                className="tab-form__input"
                                                type="password"
                                                id="new-password"
                                                name="new-password"
                                                required
                                            />
                                            <a
                                                href="#"
                                                className="forgot"
                                            >
                                                Длина пароля не менее 6 символов
                                            </a>
                                            <label
                                                className="tab-form__input"
                                                htmlFor="confirm-password"
                                            >
                                                Подтверждение пароля
                                            </label>
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                name="confirm-password"
                                                required
                                            />
                                            <button
                                                className="tab-form__submit"
                                                type="submit"
                                            >
                                                Зарегистрироваться
                                            </button>
                                        </form>
                                        <p className="google-auth">
                                            Регистрация через
                                        </p>
                                        <button className="google-login">
                                            <img
                                                className="google-login__icon"
                                                src={assets.google_icon}
                                                alt="Google"
                                            />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <span className="navbar__badge">1</span>
        </>
    )
}

export default ModalWindow;