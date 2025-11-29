import "./CartCounterButton.css";
import { useState } from "react";

const CartCounterButton = () => {
    const [count, setCount] = useState(1);

    const handleCounterIncrement = () => {
        setCount((prev) => prev + 1 );
    };

    const handleCounterDecrement = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <>
            <div className="product-quantity__wrapper">
                <div className="product-quantity">
                    <button
                        className="product-quantity__button"
                        aria-label="Уменьшить количество"
                        onClick={handleCounterDecrement}
                    >
                        −
                    </button>
                    <span>
                        {count}
                    </span>
                    <button
                        className="product-quantity__button"
                        aria-label="Увеличить количество"
                        onClick={handleCounterIncrement}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
}

export default CartCounterButton;