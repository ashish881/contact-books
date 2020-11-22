import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
        <header>
            <div className="left-header">
              <Link to="/"><h3>Contact Book</h3></Link> 
            </div>
            <div className="right-header">
                 <Link to="/createcontact"><h3> Create Contact</h3></Link>
            </div>
        </header>
        </>
    )
}
