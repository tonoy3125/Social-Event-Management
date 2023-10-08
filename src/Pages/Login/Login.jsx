import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="container mx-auto pt-9 pb-[180px]">
                <div className=" w-[400px] md:w-[752px] h-[700px] mx-auto bg-[#fff] rounded-md pt-10 md:pt-[76px]">
                    <h1 className=" text-2xl md:text-4xl font-semibold text-center text-[#403F3F] ">Login Your Account</h1>
                    <hr className="md:w-[606px] h-1 mt-7 md:mt-12 mb-7 md:mb-12 mx-auto" />
                    <form className="md:pl-24">
                        <div className="mb-6">
                            <h2 className=" text-base md:text-xl font-semibold text-[#403F3F] mb-4">Email address</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-[397px] md:w-[558px] bg-[#F3F3F3] text-base font-normal text-[#9F9F9F] rounded" type="email" name="email" placeholder="Enter your email address" id="" />
                        </div>
                        <div className="mb-6">
                            <h2 className=" text-base md:text-xl font-semibold text-[#403F3F] mb-4">Password</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-[397px] md:w-[558px] bg-[#F3F3F3] text-base font-normal text-[#9F9F9F] rounded" type="password" name="password" placeholder="Enter your password" id="" />
                            <label className="label mt-1">
                                <a href="#" className="label-text-alt link link-hover text-base md:text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <button className="bg-[#403F3F] w-[397px] md:w-[558px] py-4 text-center text-xl font-semibold text-white rounded">Login</button>
                        </div>

                    </form>
                    <p className="text-center mt-7"><span className="text-base font-semibold text-[#706F6F]">Dont’t Have An Account ? </span><Link className="text-base font-semibold text-[#F75B5F]" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;