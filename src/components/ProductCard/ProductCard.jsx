const ProductCard = ({ product, assets }) => {
    const {
        highlighted,
        image,
        title,
        priceWithWBWalletWithDiscount,
        priceWithoutWBWalletAndWithoutDiscount,
        rating,
        reviews
    } = product;

    return (
        <div className={`product-card__container ${highlighted ? "highlighted" : ""}`}>
            <img src={assets.filled_heart} alt="Favorite" className="product-card__filled_heart-icon" />
            <img src={assets.white_circle} alt="White circle" className="product-card__white_heart-icon" />
            <img src={image ?? assets.placeholder} alt={title} className="product-card__image" />
            <div className="product-card__content">
                <span className={`product-card__new-price ${priceWithWBWalletWithDiscount ? "discounted" : "normal"}`}>
                    {priceWithWBWalletWithDiscount} ₽
                </span>
                {priceWithoutWBWalletAndWithoutDiscount && (
                    <span className="product-card__old-price">
                        {priceWithoutWBWalletAndWithoutDiscount.toLocaleString("ru-RU")} ₽
                    </span>
                )}
            </div>
            <p className="product-card__product-name">{title}</p>
            <p className="product-card__product-name">{title}</p>
            <div className="product-card__rating-section">
                <img src={assets.star} alt="Rating" className="product-card__rating-icon" />
                <span className="product-card__product-rating">{rating}&nbsp;</span>
                <span className="product-card__product-mark">· {reviews} оценка</span>
            </div>
            <button className="product-card__add-to-card-button">
                <img src={assets.shopping_cart} alt="Shopping Cart" className="product-card__shopping-card-icon" />
                Добавить в корзину
            </button>
        </div>
    );
};

export default ProductCard;
