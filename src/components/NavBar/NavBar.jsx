import React from "react";
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
        <nav>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/pets">Pets</Link>
            &nbsp; | &nbsp;
            {
                user ?
                <Link to="" onClick={handleLogOut}>Log Out</Link>
                :
                <Link to="/loginsignup">Login / Sign Up</Link>
            }
        </nav>
    )
  }
  
  export default NavBar;