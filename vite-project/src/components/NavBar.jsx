import React from "react";
import { navlinks } from "../constants";

const NavBar = () => {
    return (
      <header>
        <nav>
            <img src= "/Assets/logo.svg" alt="Apple logo"/>

            <ul>

                {navlinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.label}> {link.label}</a>
                    </li>
                ))}

            </ul>

             <div className="flex-center gap-3">
                <button>
                <img src= "/Assets/search.svg" alt="Search"/>
                </button>

                <button>
                <img src= "/Assets/cart.svg" alt="Cart"/>
                </button>

             </div>

        </nav>
      </header>
    )
}
  
  export default NavBar