import React from "react"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <ArrowBackIcon />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/new-item"> New Item</Link>
      {/* <Link to="/edit-recipe"> Edit Recipe</Link> */}
    </nav>
  )
}

export default Navbar


