import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="flex list-none px-[45rem] bg-slate-500 hover:bg-blue-500 hover:text-white hover:font-bold">
            <Link to="/"><li className="m-2 ">NewsPage</li></Link>
            <Link to="/product"><li className="m-2">Productpage</li></Link>
        </nav>
    )
}

export default Navbar
