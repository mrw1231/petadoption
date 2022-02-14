import React from "react";
import "./PastOrders.css";
import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect } from "react";
import PaidOrders from "../../components/PaidOrders/PaidOrders";

function PastOrders() {
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState(null);

    useEffect(function () {
        async function fetchOrderHistory() {
        const orders = await ordersAPI.getOrderHistory();
        setOrders(orders);
        // If no orders, activeOrder will be set to null below
        setActiveOrder(orders[0] || null);
        }
        fetchOrderHistory();
    }, []);

    /*--- Event Handlers --- */
    function handleSelectOrder(order) {
        setActiveOrder(order);
    }
    return (
        <div className="PastOrders">
            <h1>PastReservations</h1>
            <PaidOrders />
        </div>
    )
}

export default PastOrders;