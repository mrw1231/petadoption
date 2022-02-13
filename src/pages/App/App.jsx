import React from "react";
// Shouldnt have to do above after React Version 17.
// Include in each component
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import PetPage from "../PetPage/PetPage";
import LoginSignUpPage from "../LoginSignUpPage/LoginSignUpPage";
import { useState } from "react";
import { getUser} from "../../utilities/users-service"

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetPage />} />
          <Route path="/loginsignup" element={<LoginSignUpPage user={user} setUser={setUser} />} />
        </Routes>
    </main>
  );
}

export default App;
