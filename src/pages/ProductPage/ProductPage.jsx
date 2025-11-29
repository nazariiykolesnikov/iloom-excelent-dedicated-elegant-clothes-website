import { useState } from "react";
import './ProductPage.css';
import { assets } from "../../assets/data/assets.js";
import { review_images } from "../../assets/data/reviews_images.js";
import { product_page_mini_images } from "../../assets/data/product-page_mini-images.js";
import {
    products_mini_hoodies_p1,
    products_mini_hoodies_p2,
    products_mini_hoodies_p3,
    products_mini_t_shirts_p1,
    products_mini_t_shirts_p2,
    products_mini_t_shirts_p3,
    products_mini_sweatshirts_p1,
    products_mini_sweatshirts_p2
} from "../../assets/data/products-mini.js";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import ProductList from "./ProductList/ProductList.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProductCounterButton from "../../components/ProductCounterButton/ProductCounterButton.jsx";
import ProductAddToCartButton from "../../components/ProductAddToCartButton/ProductAddToCartButton.jsx";

const breadcrumbs = [
    { id: 1, link: "Главная" },
    { id: 2, link: "Женщинам" },
    { id: 3, link: "Одежда для женщин" },
    { id: 4, link: "Женские штаны" },
    { id: 5, link: "Джинсы" }
];

const productListOptions = [
    products_mini_hoodies_p1,
    products_mini_hoodies_p2,
    products_mini_hoodies_p3,
    products_mini_t_shirts_p1,
    products_mini_t_shirts_p2,
    products_mini_t_shirts_p3,
    products_mini_sweatshirts_p1,
    products_mini_sweatshirts_p2
];

const ProductPage = () => {
    const [mainImage, setMainImage] = useState(review_images.product_preview_image);
    const [activeImageId, setActiveImageId] = useState(1);

    const handleImageClick = (id, src) => {
        setMainImage(src);
        setActiveImageId(id);
    };

    return (
        <>
            <Navbar/>
            <section className="product-page__section">
                <div className="product-page__wrapper">
                    <Breadcrumbs breadcrumbs={breadcrumbs}/>
                    <div className="product-wrapper">
                        <section className="product-container">
                            <figure className="product-image">
                                <img
                                    className="product-preview-image"
                                    src={mainImage}
                                    alt="Футболка с вышивкой “А голову ты дома не забыл?”"
                                />
                                <div className="product-image__wrapper">
                                    <div className="product-mini-images">
                                        {product_page_mini_images.map(({id, src, alt,idName , className}) => (
                                            <img
                                                key={id}
                                                id={idName}
                                                className={`${className} ${activeImageId === id ? "active-mini-image" : ""}`}
                                                src={src}
                                                alt={alt}
                                                onClick={() => handleImageClick(id, src)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </figure>
                            <article className="product-card">
                                <div className="product-card__container">
                                    <div className="product-card__wrapper">
                                        <div className="product-rating" id="product-rating-1">
                                            {[...Array(5)].map((_, starId) => (
                                                <img
                                                    key={starId}
                                                    src={assets.star_filled_gold}
                                                    alt="Оценка: звезда"
                                                    className="product-rating__star"
                                                />
                                            ))}
                                        </div>
                                        <h2 className="product-title">
                                            Футболка с вышивкой “А голову ты дома не забыл?”
                                        </h2>
                                    </div>
                                    <div className="product-meta__wrapper">
                                        <div className="product-meta">
                                            <span className="product-reviews">
                                                2 отзыва
                                            </span>
                                            <div className="product-icons">
                                                <img
                                                    className="product-add-to-favorites"
                                                    id="product-add-to-favorites__heart-icon"
                                                    src={assets.fi_heart}
                                                    alt="Добавить в избранное"
                                                />
                                                <img
                                                    className="product-add-to-favorites"
                                                    id="product-add-to-favorites__share-icon"
                                                    src={assets.share_alt_outlined}
                                                    alt="Поделиться"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-price-reviews">
                                    <span className="product-price">
                                        25.000 ₸
                                    </span>
                                </div>
                                <div className="product-color">
                                    <span
                                        className="product-color__text"
                                        id="product-color__text-1"
                                    >
                                        Цвет:
                                    </span>
                                    <div className="product-color__color-palette">
                                        <button className="product-color__color-palette--button">
                                            <a
                                                className="product-color__color-palette--button-link"
                                                href="#"
                                            >
                                                &nbsp;
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <p className="product-color">
                                    <span
                                        className="product-color__text"
                                        id="product-color__text-2"
                                    >
                                        Размер:
                                    </span>
                                    <button className="product-size__btn">
                                        <a
                                            className="product-size__btn-link"
                                            href="#"
                                        >
                                            One Size
                                        </a>
                                    </button>
                                </p>
                                <a
                                    className="size-guide"
                                    href="#"
                                >
                                    Параметры размера
                                </a>
                                <div className="delivery-services__container">
                                    <div className="delivery-services__wrapper">
                                        <div className="delivery-services__case">
                                            <img
                                                className="delivery-services__courier-case--image"
                                                src={assets.delivery_car_icon}
                                                alt="delivery services case image"
                                            />
                                            <p className="delivery-services__courier-case--text">
                                                Курьером до двери - от
                                                <span
                                                    className="delivery-services__case--text-color"
                                                >
                                                    &nbsp;50 000 ₸&nbsp;
                                                </span>
                                                бесплатно
                                            </p>
                                        </div>
                                        <div className="delivery-services__sdek-case">
                                            <img
                                                className="delivery-services__sdek-case--image"
                                                src={assets.delivery_station_icon}
                                                alt="delivery services sdek case image"
                                            />
                                            <p className="delivery-services__sdek-case--text">
                                                Доставка до пункта выдачи Сдэк - от<br/>
                                                <span
                                                    className="delivery-services__sdek-case--text-color"
                                                >
                                                    30 000 ₸&nbsp;
                                                </span>
                                                бесплатно
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-quantity__wrapper">
                                    <div className="product-quantity">
                                        <ProductCounterButton />
                                        <ProductAddToCartButton />
                                    </div>
                                </div>
                            </article>
                            <aside className="product-card__right-side">
                                <div className="product-card__right-side--container">
                                    <p className="product-card__right-side--text__header">
                                        Характеристики и описание
                                    </p>
                                    <p className="product-card__right-side--text__description">
                                        Черная оверсайз-футболка с машинной вышивкой «а голову ты
                                        дома не забыл?» Эта футболка создана для тех, кто ценит
                                        комфорт, стиль и лёгкий юмор в повсед
                                    </p>
                                </div>
                                <div className="product-addition-information__case">
                                    <p className="product-addition-information__case--header-addition">
                                        Дополнительная информация
                                    </p>
                                    <p className="product-addition-information__case--header-characteristics">
                                        Характеристики
                                    </p>
                                    <p className="product-addition-information__case--header-producer-country">
                                        Страна производства: Казахстан
                                    </p>
                                    <p className="product-addition-information__case--header-description">
                                        Описание
                                    </p>
                                    <p className="product-addition-information__case--descriptions">
                                        Черная оверсайз-футболка с машинной вышивкой «а голову ты
                                        дома не забыл?» Эта футболка создана для тех, кто ценит
                                        комфорт, стиль и лёгкий юмор в повседн
                                    </p>
                                    <p className="product-addition-information__case--header-composition">
                                        Состав
                                    </p>
                                    <p className="product-addition-information__case--composition">
                                        100% хлопок
                                    </p>
                                </div>
                            </aside>
                        </section>
                    </div>
                </div>
                <section className="consumers-reviews">
                    <div className="review-section">
                        <div className="review-left">
                            <h2 className="review-left__header">Отзывы</h2>
                            {review_images.map((review, index) => (
                                <div className="review-card" key={index}>
                                    <div className="review-header">
                                        <span className="review-author">Людмила</span>
                                        <span className="review-date">Сегодня, 13:54</span>
                                    </div>
                                    <div className="review-details__container">
                                        <div className="review-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <img
                                                    key={i}
                                                    src={assets.star_filled_black}
                                                    alt="Оценка: звезда"
                                                    className="product-rating__star"
                                                />
                                            ))}
                                        </div>
                                        <div className="review-details">
                                            <span>Цвет: {review.color}</span>
                                            <span>Размер: {review.size}</span>
                                        </div>
                                    </div>
                                    <p className="review-text">{review.description}</p>
                                    <img
                                        className="review-image"
                                        src={review.src}
                                        alt={review.alt}
                                    />
                                    <div className="review-report-and-aswer__wrapper">
                                        <a href="#" className="report-link">Пожаловаться на отзыв</a>
                                        <a href="#" className="answer-link">Ответить</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="review-right">
                            <div className="rating-summary__container">
                                <div className="rating-summary__wrapper">
                                    <div className="rating-summary">
                                        <div className="rating-score">5</div>
                                        <div className="rating-count">на основании 2 отзывов</div>
                                        <div className="product-rating" id="product-rating-2">
                                            {[...Array(5)].map((_, i) => (
                                                <img
                                                    key={i}
                                                    src={assets.star_filled_gold}
                                                    alt="Оценка: звезда"
                                                    className="product-rating__star"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="rating-summary__container">
                                        <div className="rating-breakdown">
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    5
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    100%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    4
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    3
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    2
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    1
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-review__wrapper">
                                <button className="leave-review__button">
                                    <a className="leave-review__button-link" href="#">
                                        Оставить отзыв
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="review-left review-left__similar-goods">
                        <h2>Похожие товары</h2>
                    </div>
                </section>
                <section>
                    {productListOptions.map((product) => (
                        <ProductList products={product}/>
                    ))}
                </section>
            </section>
            <Footer/>
        </>
    );
};

export default ProductPage;
