import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";
import * as userService from "..//../utilities/users-service";

function NavBar({ user, setUser }) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
    return (
        <nav className="NavBar">
            <Link to="/" className="Link">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/pets" className="Link">Future Friends</Link>
            &nbsp; | &nbsp;
            {
                user ?
                <>
                <Link to="/cart" className="Link">Reservations</Link>
                &nbsp; | &nbsp;
                <Link to="" className="Link" onClick={handleLogOut}>Log Out</Link>
                </>
                :
                <Link to="/loginsignup" className="Link">Login / Sign Up</Link>
            }
        </nav>
    )
  }
  
  export default NavBar;