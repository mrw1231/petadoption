import React from "react";
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';
import LineItem from "../../components/LineItem/LineItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function Cart({ order, setCart }) {
    const navigate = useNavigate();

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
    }

    if (!order) return null;
    
    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );
    
    return (
        <div className="OrderDetail">
            <div className="section-heading">
                {order.isPaid ?
                    <span>ORDER <span className="smaller">{order.orderId}</span></span>
                    :
                    <span>NEW ORDER</span>
                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section className="total">
                            {order.isPaid ?
                                 <span className="right">TOTAL&nbsp;&nbsp;</span>
                                :
                                <button
                                    className="btn-sm"
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >CHECKOUT</button>
                            }
                            <span>{order.totalQty}</span>
                            <span className="right">${order.orderTotal.toFixed(2)}</span>
                        </section>
                    </>
                    :
                    <div className="hungry">Hungry?</div>
                }
            </div>
        </div>
    );
}