import React from "react";
import "./Cart.css";
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
    // eslint-disable-next-line
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
        <div className="Cart">
            <h1>Reservations</h1>
            <div>
                {lineItems.length ?
                    <>
                        {lineItems}
                        <div>Total For Reservation: ${order.orderTotal.toFixed(2)}</div>
                        <button
                            className="btn-sm"
                            onClick={handleCheckout}
                            disabled={!lineItems.length}
                        >Finalize Reservation</button>
                    </>
                    :
                    <>
                    <h3>No pending reservations...</h3>
                    <br></br>
                    <Link to="/pets" className="FindPet">Find Your New Friend Here!</Link>
                    </>
                }
            </div>
        </div>
    );
}