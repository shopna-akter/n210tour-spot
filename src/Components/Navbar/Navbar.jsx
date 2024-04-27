import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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
        <NavLink to='/' className="mr-2 btn">Home</NavLink>
        <NavLink to='/allTouristsSpot' className="mr-2 btn">All Tourists Spot</NavLink>
        <NavLink to='/addTouristSpot' className="mr-2 btn ">Add Tourists Spot</NavLink>
        <NavLink to='/myList' className="btn">My List</NavLink>
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