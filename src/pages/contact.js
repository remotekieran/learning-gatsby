import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return(
        <div style={{ colour: 'teal' }}>
            <Link to="/contact/">Contact</Link>
            <Link to="/about/">About</Link>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
        </div>
    )
}