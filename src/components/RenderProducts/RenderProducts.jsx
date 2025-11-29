import { useRef } from "react";
import ProductCard from "../ProductCard/ProductCart.jsx";

const RenderProducts = ({ products }) => {
    const sliderRef = useRef(null);

    return (
        <div
            className="product-card__container overflow-x-auto scrollbar-hide"
            ref={sliderRef}
        >
            <div className="flex gap-[10px] w-max mt-[20px]">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default RenderProducts;