import React from "react";
// Shouldnt have to do above after React Version 17.
// Include in each component
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import { useState } from "react";
import { getUser} from "../../utilities/users-service"

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </main>
  );
}

export default App;
