import "./CheckoutOrders.css";
import ProductOrderingForm from "../../../components/ProductOrderingForm/ProductOrderingForm.jsx";

const CheckoutOrders = () => {
    return (
        <>
            <section className="checkout__section">
                <h2 className="checkout__order-booking">Оформление заказа</h2>
                <p className="checkout__contant-info">Контактная информация</p>
                <div className="checkout__wrapper">
                    <div className="checkout__left-card">
                        <div className="checkout__left-card--wrapper">
                            <div className="checkout__left-card--left-side">
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-1"
                                           type="text" name="Имя" placeholder="Имя" required/>
                                </label>
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-2"
                                           type="text" name="E-mail" placeholder="E-mail" required/>
                                </label>
                            </div>
                            <div className="checkout__left-card--right-side">
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-3"
                                           type="text" name="Фамилия" placeholder="Фамилия" required/>
                                </label>
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-4"
                                           type="text" name="Телефон" placeholder="Телефон" required/>
                                </label>
                            </div>
                            <div className="horizontal-line" id="horizontal-line-2"></div>
                            <div className="checkout__left-card--address-delivery-data">
                                <div className="delivery-data--wrapper">
                                    <h3 className="address-delivery-data__header">Данные адреса доставки</h3>
                                    <p className="address-delivery-data__adress">Беларусь, г. Минск, ул. Брилевская,
                                        д.2, кв. 15</p>
                                    <a className="address-delivery-data__change-address" href="#">Изменить адрес</a>
                                </div>
                                <div className="delivery-data--wrapper">
                                    <a className="address-delivery-data__other-delivery-way" href="#">Другой способ
                                        доставки</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductOrderingForm />
                </div>
            </section>
        </>
    );
}

export default CheckoutOrders;
