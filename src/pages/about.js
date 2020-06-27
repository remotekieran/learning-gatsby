import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/contact/">Contact</Link>
      <Link to="/">Home</Link>
      <Header headerText="About Gatsby"/>
      <Header headerText="It's pretty cool"/>
      <p>Such wow. Very React.</p>
    </div>
  )
}