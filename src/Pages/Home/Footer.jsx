import { BsArrowRightShort } from 'react-icons/bs';
import { BiMessageRoundedDots } from 'react-icons/bi';
import footer1 from "../../../public/footer img1.jpg";
import footer2 from "../../../public/footer img2.jpg";

const Footer = () => {
    return (
        <div className='mt-5 bg-[#272530]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 ml-0 lg:ml-5'>
                <div className='text-center md:text-left md:ml-4 lg:ml-0'>
                    <h1 className='text-white text-2xl font-bold mb-5'>About Safira</h1>
                    <p className='text-white text-sm font-medium mb-5'>Creative and elegant event design and planning</p>
                    <p className='text-[#a3a3a6] text-sm font-medium mb-5 px-2 md:px-0'>Planning a weeding, proposal, or event in our busy city is not so easy, and it takes skill(and time) to make it all look easy going</p>
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='text-white font-bold text-2xl mb-5'>Site Link</h1>
                    <div className='grid grid-cols-2 mb-2 ml-14 md:ml-0'>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>About Us</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>Contact Us</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2 ml-14 md:ml-0'>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>Our Team</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>Blog</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2 ml-14 md:ml-0'>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>Gallery</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>Services</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mb-2 ml-14 md:ml-0'>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>Corporate</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsArrowRightShort className='text-[#fcb900;]'></BsArrowRightShort>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer'>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='text-center col-span-2 lg:col-auto md:text-left ml-2 md:ml-4 lg:ml-0'>
                            <h1 className='text-white text-2xl font-bold mb-5'>Recent Reviews</h1>
                            <div className='flex items-center gap-4 mb-5'>
                                <img className='w-16' src={footer1} alt="" />
                                <div>
                                    <p className='text-white font-medium text-sm mb-1 hover:text-[#fcb41e] cursor-pointer'>How to Start an Event Planning Service</p>
                                    <div className='flex items-center gap-2 mb-1'>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p className='text-white text-xs'>4.4</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#ff635c] font-normal text-xs'>AUG 5, 2015</p>
                                        <p className='text-[#a3a3a6] font-normal text-xs hover:text-[#ff635c] cursor-pointer'>ADMIN</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <img className='w-16' src={footer2} alt="" />
                                <div>
                                    <p className='text-white font-medium text-sm mb-1 hover:text-[#fcb41e] cursor-pointer'>Turning a Profit in the Event Planning Business</p>
                                    <div className='flex items-center gap-2 mb-1'>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p className='text-white text-xs'>4.2</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#ff635c] font-normal text-xs'>AUG 5, 2015</p>
                                        <p className='text-[#a3a3a6] font-normal text-xs hover:text-[#ff635c] cursor-pointer'>ADMIN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center md:text-left col-span-2 lg:col-auto'>
                            <div className='ml-2 md:ml-4 lg:ml-0 mb-2 '>
                                <h1 className='text-white text-2xl font-bold mb-5'>Recent Posts</h1>
                                <div className='flex items-start gap-4 mb-5'>
                                    <img className='w-16' src={footer1} alt="" />
                                    <div>
                                        <p className='text-white font-medium text-sm mb-1 hover:text-[#fcb41e] cursor-pointer'>How to Start an Event Planning Service</p>
                                        <div className='flex items-center gap-2 mb-1'>
                                            <p className='text-[#ff635c] font-normal text-xs'>AUG 5, 2015</p>
                                            <p className='text-[#a3a3a6] font-normal text-xs hover:text-[#ff635c] cursor-pointer'>ADMIN</p>
                                            <BiMessageRoundedDots className='text-[#a3a3a6]'></BiMessageRoundedDots>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4'>
                                    <img className='w-16' src={footer2} alt="" />
                                    <div>
                                        <p className='text-white font-medium text-sm mb-1 hover:text-[#fcb41e] cursor-pointer'>How to Start an Event Planning Service</p>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-[#ff635c] font-normal text-xs'>AUG 5, 2015</p>
                                            <p className='text-[#a3a3a6] font-normal text-xs hover:text-[#ff635c] cursor-pointer'>ADMIN</p>
                                            <BiMessageRoundedDots className='text-[#a3a3a6]'></BiMessageRoundedDots>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='pb-5' />
            <div className='text-center pb-5'>
                <small className='text-[#a3a3a6] text-base font-semibold '> Safira Events © 2023. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;