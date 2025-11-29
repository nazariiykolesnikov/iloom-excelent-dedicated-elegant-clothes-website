import "./SalesProductCard.css";
import { assets } from "../../../../../assets/data/assets.js";
import { products } from "../../../../../assets/data/products.js";

const SalesProductCard = ({ sliderRef }) => {
    return (
        <>
            <div className="product-list" ref={sliderRef}>
                { products.map((product) => (
                    <div
                        key={product.id}
                        className={`product-card__container ${product.highlighted ? "highlighted" : ""}`}
                    >
                        <div className="product-card__sales-amount">
                             <span>{product.salesValue}</span>
                        </div>
                        <img src={assets.filled_heart} alt="Favorite" className="product-card__filled_heart-icon"/>
                        <img src={assets.white_circle} alt="White circle" className="product-card__white_heart-icon"/>
                        <img src={product.image ?? assets.placeholder} alt={product.title}
                             className="product-card__image"/>
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
                            <img src={assets.star} alt="Rating" className="product-card__rating-icon"/>
                            <span className="product-card__product-rating">{product.rating}&nbsp;</span>
                            <span className="product-card__product-mark">· {product.reviews} оценка</span>
                        </div>
                        <button className="product-card__add-to-card-button">
                            <img src={assets.shopping_cart} alt="Shopping Cart"
                                 className="product-card__shopping-card-icon"/>
                            Добавить в корзину
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SalesProductCard;