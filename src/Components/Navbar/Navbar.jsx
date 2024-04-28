import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import './Link.css'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [userPhoto, setUserPhoto] = useState('https://i.ibb.co/yWR8BCV/user.png');

    useEffect(() => {
        if (user && user.photoURL) {
            setUserPhoto(user.photoURL);
        } else {
            setUserPhoto('https://i.ibb.co/yWR8BCV/user.png');
        }
    }, [user]);
    const Links = <>
        <NavLink activeClassname='active' to='/' className="mr-2 btn">Home</NavLink>
        <NavLink activeClassname='active' to='/allTouristsSpot' className="mr-2 btn">All Tourists Spot</NavLink>
        <NavLink activeClassname='active' to='/addTouristSpot' className="mr-2 btn ">Add Tourists Spot</NavLink>
        <NavLink activeClassname='active' to='/myList' className="btn">My List</NavLink>
    </>
    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure to log out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        })
            .then(result => {
                if (result.isConfirmed) {

                    logOut()
                        .then()
                        .catch()
                }
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/p0Vs0RJ/logo-color-1.png" className="h-8 w-22" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label> */}
                    {
                        user ?
                            <div className="flex gap-2">
                                <img title={
                                    user ? (user.displayName || 'No user photo available') : 'No user  available'
                                } className='h-8 w-8 rounded-full mr-1 ' src={userPhoto} alt="" />
                                <button onClick={handleSignOut} className="btn">Sign Out</button>
                            </div>
                            :
                            <div>
                                <Link to='/Login' className="btn mr-2">Login</Link>
                                <Link to='/Register' className="btn">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;