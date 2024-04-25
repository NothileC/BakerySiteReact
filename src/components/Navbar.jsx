import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Recipelist">Recipe List</Link>

        </div>



    </div>
  )
}

export default Navbar