import React from "react";
// Shouldnt have to do above after React Version 17.
// Include in each component
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getUser} from "../../utilities/users-service"
import { useState } from "react";
import * as ordersAPI from '../../utilities/orders-api';
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import PetPage from "../PetPage/PetPage";
import LoginSignUpPage from "../LoginSignUpPage/LoginSignUpPage";
import Cart from "../Cart/Cart";
import Logo from "../../components/Logo/Logo";
import AdminPage from "../AdminPage/Admin";
import AddPetPage from "../AddPetPage/AddPetPage";
import PastOrders from "../PastOrders/PastOrders";

function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);

  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }
  
  return (
    <main className="App">
      <NavBar className="NavBar" user={user} setUser={setUser} />
      <Logo className="Logo" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addpet" element={<AddPetPage />} />
        <Route path="/pastorders" element={<PastOrders />} />
        <Route path="/pets" element={<PetPage
          handleAddToOrder={handleAddToOrder}
          user={user} 
        />} />
        <Route path="/loginsignup" element={<LoginSignUpPage user={user} setUser={setUser} />} />
        <Route path="/cart" element={<Cart 
          order={cart}
          setCart={setCart}
        />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </main>
  );
}

export default App;
