import AOS from 'aos';
import slider1 from "../../../public/Slider1.jpg";
import slider2 from "../../../public/Slider2.jpg";
import slider3 from "../../../public/Slider3.jpg";
import slider4 from "../../../public/Slider4.jpg";
import { useEffect } from "react";
import 'aos/dist/aos.css'




const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <div className="mt-5">
            <div className="carousel w-full   ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full  blur-[3px]" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7 md:top-28 md:left-32 lg:top-96 lg:left-[700px]">
                        <h1 className="text-xl md:text-4xl lg:text-8xl text-center lg:text-left font-bold mb-2 md:mb-5 lg:mb-10"><span className='text-[#DE3163] tracking-wide '>We Create</span> <br /> <span className='text-[#FDFEFE]'>You celebrate</span></h1>
                        <p className='md:text-base lg:text-base text-[#FDFEFE] font-semibold mb-5 lg:mb-10 text-center lg:text-center'>Planning a weeding, proposal, or event in our busy city is not so easy,<br /> and it takes skill(and time) to make it all look easy going</p>
                        <button className='bg-[#ff635c] btn-sm rounded-lg text-white text-center ml-36 md:ml-48'>Online Request</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-black text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-black text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full blur-[3px]" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7  md:top-28 md:left-32 lg:top-96 lg:left-[700px]">
                        <h1 className="text-xl lg:text-8xl text-center lg:text-left font-bold mb-2 md:mb-5 md:text-4xl lg:mb-10"><span className='text-[#DE3163] tracking-wide '>From set up</span> <br /> <span className='text-[#FDFEFE]'>To clean up</span></h1>
                        <p className='lg:text-base text-[#FDFEFE] font-semibold mb-5 lg:mb-10 text-center'>Planning a weeding, proposal, or event in our busy city is not so easy,<br /> and it takes skill(and time) to make it all look easy going</p>
                        <button className='bg-[#ff635c] btn-sm rounded-lg text-white text-center ml-36 md:ml-48'>Online Request</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-black text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-black text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full blur-[3px]" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7  md:top-28 md:left-32 lg:top-96 lg:left-[700px]">
                        <h1 className="text-xl lg:text-8xl text-center lg:text-left font-bold mb-2 md:text-4xl md:mb-5 lg:mb-10"><span className='text-[#DE3163] tracking-wide '>Let us help</span> <br /> <span className='text-[#FDFEFE]'>you create</span></h1>
                        <p className='lg:text-base text-[#FDFEFE] font-semibold mb-5 lg:mb-10 text-center'>Planning a weeding, proposal, or event in our busy city is not so easy,<br /> and it takes skill(and time) to make it all look easy going</p>
                        <button className='bg-[#ff635c] btn-sm rounded-lg text-white text-center ml-36 md:ml-48'>Online Request</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-black text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-black text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider4} className="w-full blur-[3px]" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7 md:top-28 md:left-32 lg:top-96 lg:left-[700px]">
                        <h1 className="text-xl lg:text-8xl text-center lg:text-left font-bold mb-2 md:text-4xl md:mb-5 lg:mb-10"><span className='text-[#DE3163] tracking-wide '>We Create</span> <br /> <span className='text-[#FDFEFE]'>You celebrate</span></h1>
                        <p className='lg:text-base text-[#FDFEFE] font-semibold mb-5  lg:mb-10 text-center'>Planning a weeding, proposal, or event in our busy city is not so easy,<br /> and it takes skill(and time) to make it all look easy going</p>
                        <button className='bg-[#ff635c] btn-sm rounded-lg text-white text-center ml-36 md:ml-48'>Online Request</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-black text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-black text-white">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;