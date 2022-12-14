import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);

    const menuItems = <>
        <li className='md:mx-1 font-semibold text-xl'><Link to="/">Home</Link></li>
        <li className='md:mx-1 font-semibold text-xl'><Link to="/">About</Link></li>
        <li className='md:mx-1 font-semibold text-xl'><Link to="/">Services</Link></li>
        <li className='md:mx-1 font-semibold text-xl'><Link to="/">Blog</Link></li>
        <li className='md:mx-1 font-semibold text-xl'><Link to="/">Contact</Link></li>
        {
            user?.email ?
            <>
            <li className='md:mx-1 font-semibold text-xl'><Link to="/orders">Orders</Link></li>
            </>
            :
            <li className='md:mx-1 font-semibold text-xl'><Link to="/login">Login</Link></li>
        }
    </>

    return (
        <div className="navbar my-5 bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link to="/"><img src={logo} alt="" className='w-3/4 lg:w-full' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-ghost md:text-base md:px-6 base-color">Appointment</button>
            </div>
        </div>
    );
};

export default Header;