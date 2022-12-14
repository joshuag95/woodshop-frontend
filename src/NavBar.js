import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar({}) {

    // const handleLogout = () => {
    //     fetch('/logout', {method: "DELETE"})
    //     .then(res => {
    //           if (res.ok) {
    //             setCurrentClient(null)
    //           }
    //         })
    //   }

      

    return (

        <div className="navBar">
            <NavLink to= '/'>
                <h1>Home</h1>
            </NavLink>
            <NavLink to= '/profile'>
                <h1>profile</h1>
            </NavLink>
            <NavLink to= '/mycart'>
                <h1>Shopping Cart</h1>
            </NavLink>
            <NavLink to= '/products'>
                <h1>Products</h1>
            </NavLink>
            <NavLink to= '/signup'>
                <h1>Signup</h1>
            </NavLink>

            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
    )
}