import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>

        {
            user ? <div>{
                user && <span className='text-white flex items-center gap-4'>
                    <li><Link className='text-orange-500' to='/addtoy'>Add Toy</Link></li>
                    <li><Link className='text-orange-500' to='/mytoys'>My Toys</Link></li>
                   <li> <div className='tooltip' data-tip={user.displayName}><img className='w-10 h-10 rounded-full tooltip ' src={user.photoURL} alt="" /></div></li> <li className='text-black'><Link onClick={handleLogOut} to='/login'>LogOut</Link></li> </span>
            }</div> : <li><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarItems}
                    </ul>
                </div>
                <div className=''>
                    <a className=" btn btn-ghost text-4xl font-bold ">Kids <span className='text-orange-500'>Zone</span></a>

                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" flex items-center  menu-horizontal px-1 space-x-6 text-orange-500">
                    {navBarItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;