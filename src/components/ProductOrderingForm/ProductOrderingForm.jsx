import { productOrderingFormImages } from "../../assets/data/product-ordering-form__images.js";
import "./ProductOrderingForm.css";

const ProductOrderingForm = () => {
    return (
        <>
            <div className="checkout__right-card">
                <div className="checkout__right-card--wrapper">
                    <h2>Сумма заказа</h2>
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
                                        className="horizontal-line"
                                        id="horizontal-line-1"
                                    >
                                    </div>
                                    <div
                                        className="checkout__right-card--order-sum-card-item"
                                        id="checkout__right-card--order-sum-card-item--last-child"
                                    >
                                        <strong>Общая сумма</strong>
                                        <p>{summaryPrice}</p>
                                </div>
                            </div>
                        ))}
                    <button className="checkout__right-card--button">
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
        </>
    )
}

export default ProductOrderingForm;