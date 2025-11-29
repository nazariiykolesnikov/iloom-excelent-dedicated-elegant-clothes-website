import "./Subscribing.css";

const Subscribing = () => {
    return (
        <>
            <div className="subscribing__container">
                <div className="subscribing__wrapper">
                    <div className="subscribing">
                        <div className="subscribing__header--container">
                            <h2 className="subscribing__header">
                                Подпишитесь на рассылку
                            </h2>
                            <p className="subscribing__text">
                                и получите скидку 5% на первую покупку!
                            </p>
                        </div>
                        <div className="subscribing__form--container">
                            <form className="subscribing__form">
                                <input
                                    type="email"
                                    placeholder="Введите ваш Email"
                                    className="subscribing__form--email-input"
                                />
                                <button
                                    type="submit"
                                    className="subscribing__form--submit-button"
                                >
                                    Подписаться
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribing;