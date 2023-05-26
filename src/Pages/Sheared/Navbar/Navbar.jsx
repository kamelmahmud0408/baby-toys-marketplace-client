import React, { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch()
    }

    const navBarItems = <>

        <li><NavLink className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')} to='/alltoys'>All Toys</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')} to='/blogs'>Blogs</NavLink></li>

        {
            user ? <div>{
                user && <span className='text-white flex flex-col lg:flex-row lg:items-center gap-4'>
                    <li><NavLink  className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')} to='/addtoy'>Add Toy</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')} to='/mytoys'>My Toys</NavLink></li>
                    <li > <div className='tooltip text-start' data-tip={user.displayName}  ><img className='w-10 h-10 rounded-full tooltip' src={user.photoURL} alt="" /></div></li> <li className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')}><NavLink className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')}  onClick={handleLogOut} to='/login'>LogOut</NavLink></li> </span>
            }</div> : <li><NavLink className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-black font-semibold')} to='/login'>Login</NavLink></li>
        }

    </>

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarItems}
                    </ul>
                </div>
                <div className='flex flex-row  lg:flex-col'>
                    <img className='w-20 ms-10' src="https://i.ibb.co/mXwW3FX/car-vector-object-transportation-illustration-260nw-1667537305-removebg-preview-1.png" alt="" />
                    <a className=" ms-8 lg:ms-0 text-2xl lg:text-4xl font-bold ">Toys <span className='text-orange-500'>Mart</span></a>

                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" font-bold text-xl flex items-center  menu-horizontal px-1 space-x-6 text-orange-500">
                    {navBarItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;