import React from "react";
import HomePage from "../HomePage/HomePage";
import AuthPage from "../AuthPage/AuthPage";

function LoginSignUpPage({ user, setUser }) {
    return (
        <main>
            {
                user ?
                <HomePage />
                :
                <AuthPage setUser={setUser} />
            }
        </main>
    )
}

export default LoginSignUpPage;