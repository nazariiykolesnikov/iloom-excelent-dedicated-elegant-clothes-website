import ProductCard from "../../../components/ProductCard/ProductCard.jsx";

const ProductList = ({ products, assets }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} assets={assets} />
            ))}
        </div>
    );
};

export default ProductList;