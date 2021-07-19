import React from "react"
import { Link } from "react-router-dom"
import "../Navbar.css"

function Navbar() {
  return (
    <nav className="navbar" >
      <h1 className="prominal">Prominal</h1>
      
    <div className="clicks">   
        <Link className="home" to="/">Home </Link>
      
        <Link to="/new-item"> New Item</Link>
      </div>
      
      {/* <Link to="/edit-everything"> Edit Everything</Link> */}
    </nav>
  )
}

export default Navbar


