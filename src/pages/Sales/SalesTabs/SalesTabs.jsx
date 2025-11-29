import "./SalesTabs.css";
import { assets } from "../../../assets/data/assets.js";
import {
    products_mini_hoodies_p1,
    products_mini_hoodies_p2,
    products_mini_hoodies_p3,
    products_mini_t_shirts_p1,
    products_mini_t_shirts_p2,
    products_mini_t_shirts_p3,
    products_mini_sweatshirts_p1,
    products_mini_sweatshirts_p2
} from "../../../assets/data/products-mini.js";
import { Fragment, useRef, useState } from "react";

const SalesTabs = () => {
    const [activeTab, setActiveTab] = useState("hoodie");
    const sliderRef = useRef(null);

    const productGroups = {
        hoodie: [
            products_mini_hoodies_p1,
            products_mini_hoodies_p2,
            products_mini_hoodies_p3
        ],
        "t-shirt": [
            products_mini_t_shirts_p1,
            products_mini_t_shirts_p2,
            products_mini_t_shirts_p3
        ],
        sweatshirt: [
            products_mini_sweatshirts_p1,
            products_mini_sweatshirts_p2
        ]
    };

    const tabs = [
        { id: "hoodie", label: "Худи" },
        { id: "t-shirt", label: "Футболки" },
        { id: "sweatshirt", label: "Свитшоты" },
    ];

    const renderProducts = (products) =>
        products.map((product) => (
            <Fragment key={product.id}>
                <div className="product-card__wrapper">
                    <div className={`product-card__envelope ${product.highlighted ? "highlighted" : ""}`}>
                        <div className="product-card__case">
                            <img src={assets.filled_heart} alt="Favorite" className="product-card__filled_heart-icon" />
                            <img src={assets.white_circle} alt="White circle" className="product-card__white_heart-icon" />
                            <img
                                src={product.image ?? assets.placeholder}
                                alt={product.title}
                                className="product-card__image"
                            />
                            <div className="product-card__content">
                                <span
                                    className={`product-card__new-price ${
                                        product.priceWithWBWalletWithDiscount ? "discounted" : "normal"
                                    }`}
                                >
                                    {product.priceWithWBWalletWithDiscount} ₽
                                </span>
                                {product.priceWithoutWBWalletAndWithoutDiscount && (
                                    <span className="product-card__old-price">
                                        {product.priceWithoutWBWalletAndWithoutDiscount.toLocaleString("ru-RU")} ₽
                                    </span>
                                )}
                            </div>
                            <p className="product-card__product-name">{product.title}</p>
                            <div className="product-card__rating-section">
                                <img src={assets.star} alt="Rating" className="product-card__rating-icon" />
                                <span className="product-card__product-rating">{product.rating}&nbsp;</span>
                                <span className="product-card__product-mark">· {product.reviews} оценка</span>
                            </div>
                            <button className="product-card__add-to-card-button">
                                <img src={assets.shopping_cart} alt="Shopping Cart" className="product-card__shopping-card-icon" />
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
    ));

    return (
        <div className="product-tabs__container">
            <div className="product-tabs__wrapper">
                <section className="product-tabs__section">
                    <h2 className="product-tabs__heading">Новинки</h2>
                    <div className="news_product__tabs--container">
                        <div className="news_product__tabs--wrapper">
                            <div className="news_product__tabs">
                                {tabs.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        onClick={() => setActiveTab(id)}
                                        className={`news_product__tabs--button ${activeTab === id ? "active" : ""}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                            <div className="news_product__tabs-content">
                                <div className="news_product__tabs-content__container">
                                    <div className="news_product__tabs-content__case">
                                        <div className="news_product__tabs-content__wrapper" ref={sliderRef}>
                                            {productGroups[activeTab].map((group) =>
                                                renderProducts(group)
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sales-product__watch-all-goods">
                                <button className="sales-product__watch-all-goods--button">
                                    <a className="sales-product__watch-all-goods--button-link">
                                        Все новинки
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SalesTabs;
