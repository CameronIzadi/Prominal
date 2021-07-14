import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/new-recipe"> New Recipe</Link> */}
      {/* <Link to="/edit-recipe"> Edit Recipe</Link> */}
    </nav>
  )
}

export default Navbar


