import { salesOrderGiftsImages } from "../../../assets/data/sales-order-gifts-images.js";
import "./SalesOrderGiftWrapping.css";

const SalesOrderGiftWrapping = () => {
    return (
        <>
            <section
                className="sales-order-gifts-wrapping__container"
                style={{
                    backgroundImage: `url(${salesOrderGiftsImages.sales_order_gift_wrapping})`
                }}
            >
                <img
                    src={salesOrderGiftsImages.sales_order_gift_woman}
                    alt="Подарочная упаковка I LOOM"
                    className="sales-order-gifts-wrapping__gift-wrapping-image"
                />
                <div className="sales-order-gifts-wrapping__gift-wrapping-messages">
                    <div className="gift-wrapping-messages">
                        <h2 className="gift-wrapping-messages__header">
                            БЕСПЛАТНАЯ ДОСТАВКА НА ВСЕ ЗАКАЗЫ
                        </h2>
                        <h3 className="gift-wrapping-messages__subheader">
                            СПОРТИВНАЯ КОЛЛЕКЦИЯ
                        </h3>
                        <button className="gift-wrapping-messages__button">
                            Смотреть
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SalesOrderGiftWrapping;