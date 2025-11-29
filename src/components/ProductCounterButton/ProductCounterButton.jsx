import "./ProductCounterButton.css";

const ProductCounterButton = () => {
    return (
        <>
            <div className="product-quantity">
                <button
                    className="product-quantity__button"
                    aria-label="Уменьшить количество"
                >
                    −
                </button>
                <span>
                    1
                </span>
                <button
                    className="product-quantity__button"
                    aria-label="Увеличить количество"
                >
                    +
                </button>
            </div>
        </>
    );
}

export default ProductCounterButton;