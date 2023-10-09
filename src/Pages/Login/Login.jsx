/* eslint-disable no-unused-vars */
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signIn, setLoading, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters')
            return
        }


        signIn(email, password)
            .then(result => {
                navigate(location?.state ? location.state : "/")
                toast.success('User logged Successfully')
            })
            .catch(error => {
                toast.error("Verify Your Email")
                setLoading(false)
                e.target.reset()
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                toast.success('User logged Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                toast.success('User logged Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }





    return (
        <div className="bg-[#F3F3F3]">
            <div className="container mx-auto pt-9 pb-[180px]">
                <div className=" w-[400px] md:w-[752px] h-[700px] mx-auto bg-[#fff] rounded-md pt-10 md:pt-[76px]">
                    <h1 className=" text-2xl md:text-4xl font-semibold text-center text-[#403F3F] ">Login Your Account</h1>
                    <hr className="md:w-[606px] h-1 mt-7 md:mt-12 mb-7 md:mb-12 mx-auto" />
                    <form onSubmit={handleLogin} className="md:pl-24">
                        <div className="mb-6">
                            <h2 className=" text-base md:text-xl font-semibold text-[#403F3F] mb-4">Email address</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-[397px] md:w-[558px] bg-[#F3F3F3] text-base font-normal text-[#9F9F9F] rounded" type="email" name="email" placeholder="Enter your email address" id="" />
                        </div>
                        <div className="mb-6">
                            <h2 className=" text-base md:text-xl font-semibold text-[#403F3F] mb-4">Password</h2>
                            <div className='relative '>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-[397px] md:w-[558px] bg-[#F3F3F3] text-base font-normal text-[#9F9F9F] rounded" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" id="" />
                                <span className="absolute right-4 md:right-28 top-6 rtl:left-0 rtl:right-auto " onClick={() => { setShowPassword(!showPassword) }} >
                                    {
                                        showPassword ? <AiOutlineEyeInvisible className='text-xl'></AiOutlineEyeInvisible> : <AiOutlineEye className='text-xl'></AiOutlineEye>
                                    }
                                </span>
                            </div>
                            <label className="label mt-1">
                                <a href="#" className="label-text-alt link link-hover text-base md:text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <button className="bg-[#403F3F] w-[397px] md:w-[558px] py-4 text-center text-xl font-semibold text-white rounded">Login</button>
                        </div>

                    </form>
                    <p className="text-center mt-7"><span className="text-base font-semibold text-[#706F6F]">Dont’t Have An Account ? </span><Link className="text-base font-semibold text-[#F75B5F]" to="/register">Register</Link></p>
                    <div className="flex items-center justify-center mt-3 gap-3">
                        <button onClick={handleGoogleSignIn} className="btn btn-sm">Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-sm">Github</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;