import React from "react";
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LineItem from "../../components/LineItem/LineItem";

export default function Cart({ order, setCart }) {
    const navigate = useNavigate();

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/');
    }

    useEffect(function() {
        async function getCart() {
          const cart = await ordersAPI.getCart();
          setCart(cart);
        }
        getCart();
    }, []);

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
            <h1>Reservations</h1>
            <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section className="total">
                            <span>Total Items {order.totalQty}</span>
                            <br></br>
                            <span className="right">Amount Owed ${order.orderTotal.toFixed(2)}</span>
                            <br></br>
                            <button
                                className="btn-sm"
                                onClick={handleCheckout}
                                disabled={!lineItems.length}
                            >CHECKOUT</button>
                        </section>
                    </>
                    :
                    <Link to="/pets">Find Your New Friend Here!</Link>
                }
            </div>
        </div>
    );
}