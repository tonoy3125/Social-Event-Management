
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Marquee from "react-fast-marquee";
import staff1 from "../../assets/pic/ceo.jpg";
import staff2 from "../../assets/pic/headofevents.jpg";
import staff3 from "../../assets/pic/eventcordinator.jpg";
import staff4 from "../../assets/pic/designdirector.jpg";
import staff5 from "../../assets/pic/eventplanner.jpg";
import staff6 from "../../assets/pic/decorator.jpg";
import staff7 from "../../assets/pic/photograper.jpg";



const Team = () => {

    return (
        <div className=' mt-5 mb-5 bg-[#F3F3F3]'>
            <section className="">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Our Executive Team</h1>

                    <p className="max-w-xl font-medium mx-auto my-6 text-center text-[#a3a3a6]">
                        MEET OUR BEST TEAM
                    </p>
                    <Marquee>
                        <div className=" flex gap-5 mt-8 lg:mt-16 ">
                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staff1} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Daniel Lee</h1>

                                <p className="mt-2 text-gray-500 capitalize ">CEO</p>

                                <div className="flex mt-3 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Reddit">
                                        <BsFacebook className='text-xl'></BsFacebook>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-violet-800" aria-label="Facebook">
                                        <AiFillInstagram className='text-2xl'></AiFillInstagram>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Github">
                                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staff2} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Kevin Anderson</h1>

                                <p className="mt-2 text-gray-500 capitalize ">Head of Events</p>

                                <div className="flex mt-3 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Reddit">
                                        <BsFacebook className='text-xl'></BsFacebook>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-violet-800" aria-label="Facebook">
                                        <AiFillInstagram className='text-2xl'></AiFillInstagram>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Github">
                                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staff3} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Jessica Martinez</h1>

                                <p className="mt-2 text-gray-500 capitalize ">Event Coordinator</p>

                                <div className="flex mt-3 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Reddit">
                                        <BsFacebook className='text-xl'></BsFacebook>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-violet-800" aria-label="Facebook">
                                        <AiFillInstagram className='text-2xl'></AiFillInstagram>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Github">
                                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staff4} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Nicholas Taylor</h1>

                                <p className="mt-2 text-gray-500 capitalize ">Design director</p>

                                <div className="flex mt-3 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Reddit">
                                        <BsFacebook className='text-xl'></BsFacebook>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-violet-800" aria-label="Facebook">
                                        <AiFillInstagram className='text-2xl'></AiFillInstagram>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Github">
                                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staff5} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Emma Garcia</h1>

                                <p className="mt-2 text-gray-500 capitalize ">Event Planner</p>

                                <div className="flex mt-3 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Reddit">
                                        <BsFacebook className='text-xl'></BsFacebook>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-violet-800" aria-label="Facebook">
                                        <AiFillInstagram className='text-2xl'></AiFillInstagram>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Github">
                                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staff6} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Sophia Martinez</h1>

                                <p className="mt-2 text-gray-500 capitalize ">Decorator</p>

                                <div className="flex mt-3 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Reddit">
                                        <BsFacebook className='text-xl'></BsFacebook>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-violet-800" aria-label="Facebook">
                                        <AiFillInstagram className='text-2xl'></AiFillInstagram>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Github">
                                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group ">
                                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staff7} alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Michael Davis</h1>

                                <p className="mt-2 text-gray-500 capitalize ">Photographer</p>

                                <div className="flex mt-3 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Reddit">
                                        <BsFacebook className='text-xl'></BsFacebook>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-violet-800" aria-label="Facebook">
                                        <AiFillInstagram className='text-2xl'></AiFillInstagram>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-blue-700" aria-label="Github">
                                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </section>
        </div>
    );
};

export default Team;