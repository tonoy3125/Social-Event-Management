
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext)
    console.log(loading)



    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                            } to="/">Home</NavLink></li>
                            <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                            } to="/booking">Booking</NavLink></li>
                            <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                            } to="/about">About Us</NavLink></li>
                            
                        </ul>
                    </div>
                    <div className="ml-14 md:ml-0 ">
                        <a className=" font-bold "><span className="text-5xl text-[#F08080]">SAFIRA</span> <span className="text-[#676767]">EVENTS AGENCY</span></a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-5">
                        <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                        } to="/">Home</NavLink></li>
                        <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                        } to="/gallery">Gallery</NavLink></li>
                        <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                        } to="/booking">Booking</NavLink></li>
                        <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                        } to="/about">About Us</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip" >
                                <div className="w-10 h-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg text-black font-bold bg-base-100 rounded-box w-52">
                                <li className="mb-1">
                                    <button className="px-5 py-3 rounded-lg bg-[#ff635c] text-white">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="px-5 py-3 rounded-lg bg-[#ff635c] text-white">SignOut</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to="/login"> <button className="px-5 py-3 rounded-lg bg-[#ff635c] text-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

