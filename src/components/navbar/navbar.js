import React from 'react'

import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
            <a href='/' className="navbar-brand">File Manager</a>
            <button ><span>&#43;</span> Upload</button>
            </nav>
        </div>
    )
}
