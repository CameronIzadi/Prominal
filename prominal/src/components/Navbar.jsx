import React from "react"
import { Link } from "react-router-dom"
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "../Navbar.css"

function Navbar() {
  return (
    <nav className="navbar" >

    <div className="clicks">
      <h1 className="prominal">Prominal</h1>

        
        <Link to="/">Home</Link>
      
        <Link to="/new-item"> New Item</Link>
      </div>
      
      {/* <Link to="/edit-everything"> Edit Everything</Link> */}
    </nav>
  )
}

export default Navbar


