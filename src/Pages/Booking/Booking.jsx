import banner from "../../assets/pic/bannerbooking.jpg";
import nature from "../../assets/pic/nature.jpg";
import sea from "../../assets/pic/seabeach.jpg";
import lake from "../../assets/pic/lake.jpg";
import indonesia from "../../assets/pic/destination1.jpg";
import jamaica from "../../assets/pic/destination2.jpg";
import greece from "../../assets/pic/destination3.jpg";
import swizerland from "../../assets/pic/destination4.jpg";
import { AiOutlineTable } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import Footer from "../Home/Footer";

const Booking = () => {
    return (
        <div className="mt-10 mb-10">
            <div>
                <h1 className="text-center"> <span className="text-[#df1f59] text-5xl italic">Incredible</span><br /> <br />
                    <span className="text-[#df1f59] text-5xl font-bold">DESTINATIONS</span></h1>
            </div>
            <div className="">
                <div className="hero h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-white">INSTANT ONLINE BOOKING</h1>
                            <p className="mb-5 text-center text-white">Love Knows No Borders! Celebrate in a Destination Wedding Adventure! 🌍✨</p>
                            <button className='bg-[#ff635c] btn-sm rounded-lg text-white mt-5'>Online Booking</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-5">Organizing a wedding always starts <br /> with a confirmed date!</h1>
                <div className="flex flex-col md:flex-row  items-center justify-center gap-14 ">
                    <div className="w-44">
                        <AiOutlineTable className="text-[#e4336a] text-4xl mb-5 ml-10"></AiOutlineTable>
                        <p className="text-sm font-medium text-[#3f3f51]">Enter your preferred wedding date and venue.</p>
                    </div>
                    <div className="w-44">
                        <AiOutlineClockCircle className="text-[#e4336a] text-4xl mb-5 ml-10"></AiOutlineClockCircle>
                        <p className="text-sm font-medium text-[#3f3f51]">Check availability over a 3-week period.</p>
                    </div>
                    <div className="w-44">
                        <AiOutlineCheckCircle className="text-[#e4336a] text-4xl mb-5 ml-10"></AiOutlineCheckCircle>
                        <p className="text-sm font-medium text-[#3f3f51]">Book online and receive confirmation instantly.</p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-3xl font-bold text-center">Venue Type</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto mt-5">
                    <div>
                        <img className="rounded w-[400px] mx-auto md:w-full" src={nature} alt="" />
                        <h2 className="text-xl font-bold text-center mt-1">Nature View</h2>
                    </div>
                    <div>
                        <img className="rounded w-[400px] mx-auto md:w-full" src={sea} alt="" />
                        <h2 className="text-xl font-bold text-center mt-1">Sea Beach View</h2>
                    </div>
                    <div>
                        <img className="rounded w-[400px] mx-auto md:w-full" src={lake} alt="" />
                        <h2 className="text-xl font-bold text-center mt-1">Lake View</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className=" md:p-5 lg:w-1/2 mx-auto">
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full h-1 lg:mr-5 bg-[#e4336a]" />
                        <h1 className="text-3xl font-bold mb-4 text-center text-[#e4336a]  mt-5">Destinations</h1>
                        <hr className="w-full h-1 bg-[#e4336a] lg:ml-5 " />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  card  gap-3">
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={indonesia} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={jamaica} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={greece} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={swizerland} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Packages */}
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-[#e4336a] mt-16 mb-7 px-3">Select Your Package</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 lg:px-5 gap-10 mb-16">

                    {/* 1st package */}
                    <div className="bg-[#FFFF] shadow-xl rounded-lg px-2 lg:px-5 pt-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold my-5 lg:px-5">Botanic Discovery <br /> Assistance</h3>
                            <div>
                                <p className="text-base text-[#403F3F]">Starting from</p>
                                <p className="text-pink-600 font-medium">$1000 - $1500/-</p>
                            </div>
                        </div>

                        <div className="lg:px-5 space-y-3">
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Get Vendor Suggestions with date availability & <br /> quotes within your budget & location</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for one category in one city</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Best Price Negotiation</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for 45 days</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Follow on communication / Virtual <br /> support till booking stage</p>
                            <div className="flex justify-center pt-9 pb-3 ">
                                <button className="flex justify-end btn btn-secondary">Book Now</button>
                            </div>
                        </div>

                    </div>

                    <div>

                        {/* 2nd package */}
                        <div className="bg-[#FFFF] shadow-xl rounded-lg px-2 lg:px-5 pt-3">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold lg:px-5">Botanic Booking <br /> Assistance</h3>
                                <div>
                                    <p className="text-base text-[#403F3F]">Starting from</p>
                                    <p className="text-pink-600 font-medium">$2000 - $3000/-</p>
                                </div>
                            </div>

                            <div className="lg:px-5 space-y-3">
                                <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Get Vendor Suggestions with date availability & <br /> quotes within your budget & location</p>
                                <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for one category in one city</p>
                                <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Best Price Negotiation</p>
                                <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for 45 days</p>
                                <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>1 Video meeting for assistance</p>


                                <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Follow on communication / Virtual <br /> support till booking stage</p>
                                <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for 3 categories in one city OR <br />2 cities for one category</p>
                            </div>
                            <div className="flex justify-center mt-3 pb-5">
                                <button className="flex justify-end btn btn-secondary">Book Now</button>
                            </div>
                        </div>
                    </div>

                    {/* 3rd package */}
                    <div className="bg-[#FFFF] shadow-xl rounded-lg px-2 lg:px-5 pt-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold lg:px-5">Botanic Booking <br /> Assistance</h3>
                            <div>
                                <p className="text-base text-[#403F3F]">Starting from</p>
                                <p className="text-pink-600 font-medium">$3000 - $4500/-</p>
                            </div>
                        </div>

                        <div className="lg:px-5 space-y-3">
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Get Vendor Suggestions with date availability & <br /> quotes within your budget & location</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for one category in one city</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Best Price Negotiation</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for 45 days</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>1 Video meeting for assistance</p>


                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Follow on communication / Virtual <br /> support till booking stage</p>
                            <p className="flex items-center"><AiFillCheckCircle className="text-xl text-pink-600 mr-2"></AiFillCheckCircle>Valid for 3 categories in one city OR <br />2 cities for one category</p>
                            <div className="flex justify-center pb-5">
                                <button className="flex justify-end btn btn-secondary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;