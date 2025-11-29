import { assets } from "../../assets/data/assets.js";
import "./Payment.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
const credit_card_front_side = "https://i.ibb.co/27vCXJdB/Credit-card-front-side.png";
const credit_card_back_side = "https://i.ibb.co/F46n4pVY/Credit-card-back-side.png";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const breadcrumbs = [
    { id: 1, link: "Корзина" },
    { id: 2, link: "Оформление заказа" },
    { id: 3, link: "Оплата заказа" },
];

const Payment = () => {
    return (
        <>
            <Navbar />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <section className="payment__section">
                <div className="payment-container">
                    <div className="payment__header">
                        <p>Оплата заказа</p>
                        <p>Все транзакции защищены и зашифрованы</p>
                    </div>
                    <div className="card-visual">
                        <div className="card">
                        <img
                            className="credit_card_front_side"
                            src={credit_card_front_side}
                            alt="credit card front side"
                        />
                        <img
                            className="credit card back side"
                            src={credit_card_back_side}
                            alt="credit card back side"
                        />
                        </div>
                    </div>
                    <form className="payment-form">
                        <p>Кредитная карта</p>
                        <label id="payment-form__cvv-label">
                            <img
                                className="payment-form__cvv-lock"
                                src={assets.lock}
                                alt="lock logo"
                            />
                            <input
                                className="payment-form__inputs"
                                id="payment-form__card-number"
                                type="text"
                                name="cardNumber"
                                placeholder="Номер карты"
                                required
                            />
                        </label>
                        <label>
                            <input
                                className="payment-form__inputs"
                                id="payment-form__cardholder-name"
                                type="text"
                                name="cardHolder"
                                placeholder="Имя держателя карты"
                                required
                            />
                        </label>
                        <div className="form-row">
                            <label className="form-row__label">
                                <img
                                    className="payment-form__arrow-down"
                                    src={assets.arrow_down_grey}
                                    alt="lock logo"
                                />
                                <input
                                    className="payment-form__inputs"
                                    id="payment-form__expiry-month"
                                    type="text"
                                    name="expiry-month"
                                    placeholder="12"
                                    required
                                />
                            </label>
                            <label className="form-row__label">
                                <img
                                    className="payment-form__arrow-down"
                                    src={assets.arrow_down_grey}
                                    alt="lock logo"
                                />
                                <input
                                    className="payment-form__inputs"
                                    id="payment-form__expiry-year"
                                    type="text"
                                    name="expiry-year"
                                    placeholder="24"
                                    required
                                />
                            </label>
                            <label
                                className="form-row__label"
                                id="payment-form__cvv-label"
                            >
                                <img
                                    className="payment-form__cvv-question"
                                    src={assets.question}
                                    alt="question logo"
                                />
                                <input
                                    className="payment-form__inputs"
                                    id="payment-form__cvv"
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    required
                                />
                            </label>
                        </div>
                        <div className="payment-summary">
                            <strong>Сумма к оплате:</strong>
                            <strong>25.000 ₸</strong>
                        </div>
                        <button
                            type="submit"
                            className="pay-button"
                        >
                            Оплатить
                        </button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Payment;