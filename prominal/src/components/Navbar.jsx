import React from "react"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "../Navbar.css"

function Navbar() {
  return (
    <nav className ="navbar" >
      <Link to="/" className="back">
        <ArrowBackIcon />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/new-item"> New Item</Link>
      {/* <Link to="/edit-recipe"> Edit Recipe</Link> */}
    </nav>
  )
}

export default Navbar


