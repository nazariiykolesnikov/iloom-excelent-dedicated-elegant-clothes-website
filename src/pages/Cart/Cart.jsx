import { assets } from "../../assets/data/assets.js";
import { cartPageProductImages } from "../../assets/data/card-page__product-images.js";
import { productOrderingFormImages } from "../../assets/data/product-ordering-form__images.js";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";

import LocationDetectionButton from "./LocationDetectionButton/LocationDetectionButton.jsx";
import CartCounterButton from "./CartCounterButton/CartCounterButton.jsx";
import {useState} from "react";

const breadcrumbs = [
    { id: 1, link: "Главная" },
    { id: 2, link: "Корзина" },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(cartPageProductImages);

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <>
            <Navbar />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <main className="cart-page__container">
                <h2 className="cart-page__title">
                    Корзина
                </h2>
                <div className="cart-page__cart-list__wrapper-container">
                    <div className="cart-page__cart-list__wrapper">
                        <section className="cart-page__cart-list__container">
                            <div className="horizontal-line"></div>
                            <ul className="cart-page__cart-list">
                                { cartItems.map(({
                                              id,
                                              name,
                                              color,
                                              size,
                                              src,
                                              quantity,
                                              className,
                                              price,
                                              alt
                                }) => (
                                    <li
                                        key={id}
                                        className="cart-page__cart-list__item"
                                    >
                                        <figure className="cart-page__cart-list__item-image__figure">
                                            <img
                                                id={id}
                                                className={className}
                                                src={src}
                                                alt={alt}
                                            />
                                        </figure>
                                        <div className="cart-page__cart-list__item-info">
                                            <h3 className="cart-page__cart-list__item-name">
                                                {name}
                                            </h3>
                                            <p
                                                className="cart-page__cart-list__item-text"
                                                id="cart-page__cart-list__item-text--color"
                                            >
                                                <strong>Цвет:</strong>
                                                {color}
                                            </p>
                                            <p className="cart-page__cart-list__item-text">
                                                <strong>Размер:</strong>
                                                {size}
                                            </p>
                                            <p className="cart-page__cart-list__item-text">
                                                <strong>Количество:</strong>
                                                {quantity}
                                            </p>
                                            <p className="cart-page__cart-list__item-text">
                                                <strong>Сумма:</strong>
                                                {price}
                                            </p>
                                        </div>
                                        <div className="cart-page__cart-list__product-controls">
                                            <CartCounterButton/>
                                            <button
                                                type="button"
                                                className="cart-page__cart-list__trash-button"
                                                aria-label="Удалить товар"
                                                onClick={() => handleRemoveItem(id)}
                                            >
                                                <img
                                                    className="cart-page__cart-list__trash-button-logo"
                                                    src={assets.trash_logo}
                                                    alt="trash logo"
                                                />
                                            </button>
                                        </div>
                                        <div className="cart-list__horizontal-line__container">
                                            <div className="cart-list__horizontal-line">
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <div className="cart-page__right-side__container">
                            <section className="cart-page__order-booking__container">
                                <div className="cart-page__order-booking__wrapper">
                                    <div className="cart-page__order-booking__wrapper-container">
                                        <form className="cart-page__promocode-form">
                                            <label
                                                htmlFor="promocode-input"
                                                className="cart-page__promocode-form-label"
                                            >
                                                Промокод
                                            </label>
                                            <div
                                                className="cart-page__promocode-form-input-wrapper"
                                            >
                                                <input
                                                    id="promocode-input"
                                                    type="text"
                                                    placeholder="Ввести промокод"
                                                    className="cart-page__promocode-form-input"
                                                />
                                                <button
                                                    type="submit"
                                                    className="cart-page__promocode-form-input__send-button"
                                                >
                                                    <img
                                                        src={assets.arrow_down}
                                                        alt="отправить промокод"
                                                        className="cart-page__promocode-form-input__send-button-image"
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section className="cart-page__product-booking-form">
                                <div className="product-booking-form__wrapper">
                                    <div className="checkout__right-card">
                                        <div className="checkout__right-card__wrapper">
                                            <h2 className="checkout__right-card-containder__title">
                                                Сумма заказа
                                            </h2>
                                            { productOrderingFormImages.map(({
                                                productPrice,
                                                deliveryPrice,
                                                discountAmount,
                                                packaging,
                                                summaryPrice
                                            }) => (
                                                <div className="checkout__right-card--order-sum-card--container">
                                                    <div className="checkout__right-card--order-sum-card-item">
                                                        <p>Стоимость товаров</p>
                                                        <p>{productPrice}</p>
                                                    </div>
                                                    <div className="checkout__right-card--order-sum-card-item">
                                                        <p>Доставка</p>
                                                        <p>{deliveryPrice}</p>
                                                    </div>
                                                    <div className="checkout__right-card--order-sum-card-item">
                                                        <p>Сумма скидки</p>
                                                        <p>{discountAmount}</p>
                                                    </div>
                                                    <div className="checkout__right-card--order-sum-card-item">
                                                        <p>Упаковка</p>
                                                        <p>{packaging}</p>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                top: "10px",
                                                                left: "20px",
                                                                height: "1px",
                                                                width: "336px",
                                                                backgroundColor: "#000000",
                                                            }}
                                                        >
                                                    </div>
                                                    </div>
                                                    <div
                                                        className="checkout__right-card--order-sum-card-item"
                                                    >
                                                        <strong>Общая сумма</strong>
                                                        <p>{summaryPrice}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            <button className="checkout__right-card__button">
                                                <a
                                                    className="checkout__right-card--button-link"
                                                    href="#"
                                                    alt="redirecting to the ordering page"
                                                >
                                                    Перейти к оформлению
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <section className="cart-page__order-delivery__container">
                    <div className="cart-page__order-delivery__wrapper">
                        <div className="cart-page__order-delivery">
                            <h2
                                className="cart-page__title"
                                id="cart-page__delivery-title"
                            >
                                Доставка
                            </h2>
                            <div className="cart-page__order-delivery__buttons">
                                <button
                                    className="cart-page__order-delivery__button"
                                    id="cart-page__order-sdek-delivery__button"
                                    type="button"
                                >
                                    <a href="#" className="cart-page__order-delivery__button-link">
                                        Доставка Сдэк
                                    </a>
                                    <img src={assets.delivery_car_icon} alt="delivery_car_icon" />
                                </button>
                                <button
                                    className="cart-page__order-delivery__button"
                                    id="cart-page__order-post-delivery__button"
                                    type="button"
                                >
                                    <a
                                        href="#"
                                        className="cart-page__order-delivery__button-link"
                                    >
                                        Доставка Почтой
                                    </a>
                                    <img src={assets.email_logo} alt="email icon" />
                                </button>
                            </div>
                            <div className="cart-page__order-delivery__delivery-placement">
                                <p className="cart-page__order-delivery__delivery-time">
                                    Срок доставки 3–7 дней
                                </p>
                                <h4>Куда доставить заказ?</h4>
                                <p className="cart-page__order-delivery__address-on-map">
                                    Укажите адрес на карте или используйте поиск
                                </p>
                                <div className="cart-page__order-delivery__placement-detection">
                                    <img
                                        src={assets.location_detection_logo_black}
                                        alt="location detection logo"
                                    />
                                    <img
                                        id="placement-detection__circle_logo"
                                        src={assets.circle_logo_black}
                                        alt="circle logo"
                                    />
                                    <LocationDetectionButton/>
                                </div>
                                <form className="delivery-form">
                                    <label className="delivery-form__label">
                                        <input
                                            type="text"
                                            name="city"
                                            className="delivery-form__input-big-field"
                                            id="delivery-form__input-big-field__locality"
                                            placeholder="Населенный пункт"
                                            required
                                        />
                                    </label>
                                    <label className="delivery-form__label">
                                        <input
                                            type="text"
                                            name="street"
                                            className="delivery-form__input-big-field"
                                            id="delivery-form__input-big-field__street"
                                            placeholder="Улица"
                                            required
                                        />
                                    </label>
                                    <div className="delivery-form__row">
                                        <label className="delivery-form__label">
                                            <input
                                                type="text"
                                                name="house"
                                                className="delivery-form__input-little-field"
                                                id="delivery-form__input-big-field__house"
                                                placeholder="Дом"
                                                required
                                            />
                                        </label>
                                        <label className="delivery-form__label">
                                            <input
                                                type="text"
                                                name="apartment"
                                                className="delivery-form__input-little-field"
                                                id="delivery-form__input-big-field__apartment"
                                                placeholder="Квартира"
                                                required
                                            />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Cart;