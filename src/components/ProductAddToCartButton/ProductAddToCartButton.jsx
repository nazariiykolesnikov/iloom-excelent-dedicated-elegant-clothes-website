import { assets } from "../../assets/data/assets.js";
import "./ProductAddToCartButton.css";

const ProductAddToCartButton = () => {
    return (
        <div className="product-card-addition">
            <button
                aria-label="Добавить товар в корзину"
                className="product-card-addition__button"
            >
                <img
                    className="product-card-addition__button-image"
                    src={assets.add_to_card_icon}
                    alt="Иконка корзины"
                />
                <span className="product-card-addition__text">
                    В корзину
                </span>
            </button>
        </div>
    );
}

export default ProductAddToCartButton;