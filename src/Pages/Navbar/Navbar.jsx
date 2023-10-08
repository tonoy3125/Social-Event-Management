

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
                            } to="/about">About</NavLink></li>
                            <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                            } to="/career">Blog</NavLink></li>
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
                        } to="/about">About</NavLink></li>
                        <li className="text-[#232a34] text-lg font-normal"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-[#fcb41e] btn btn-sm font-medium underline" : ""
                        } to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"> <button className="px-5 py-3 rounded-lg bg-[#ff635c] text-white">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;