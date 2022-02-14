import React from "react";
import { Link } from "react-router-dom";

function AdminPage() {
    return (
        <div>
            <h1>AdminPage</h1>
            <Link to="/addpet">ADD A PET</Link>
        </div>
    )
}

export default AdminPage;