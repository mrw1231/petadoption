import React from "react";
import "./AuthPage.css";
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="AuthPage">
      { showSignUp ?
        <>
        <h1>Sign Up</h1>
        <SignUpForm setUser={setUser} />
        </>
        :
        <>
        <h1>Login</h1>
        <LoginForm setUser={setUser} />
        </>
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
    </main>
  );
}