import React from "react"
import { Link } from "react-router-dom"
import "../Navbar.css"

function Navbar() {
  return (
    <nav className="navbar" >
      
      <ul className="nav-list">

        <Link to="/">
          <h1 className="prominal">Prominal
          </h1></Link>
      
    <div className="clicks">   
      
          <Link className="new" to="/new/new-item"> New Item</Link>
          
        </div>
        
        {/* <div id="searchWrapper">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="search for something"
            />
        </div> */}

      </ul>

    </nav>
  )
}

export default Navbar


