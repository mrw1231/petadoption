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
            <Link to="/signup">Sign Up</Link>
            &nbsp; | &nbsp;
            <Link to="/login">Login</Link>
            &nbsp; | &nbsp;
        </nav>
    )
  }
  
  export default NavBar;