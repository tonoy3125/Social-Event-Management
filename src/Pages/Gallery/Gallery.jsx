import wedding1 from "../../assets/pic/wedding1.jpg";
import wedding2 from "../../assets/pic/wedding2.jpg";
import wedding3 from "../../assets/pic/weeding3.jpg";
import wedding4 from "../../assets/pic/wedding4.jpg";
import birthday1 from "../../assets/pic/birthday1.jpg";
import birthday2 from "../../assets/pic/birthday2.jpg";
import birthday3 from "../../assets/pic/birthday3.jpg";
import birthday4 from "../../assets/pic/birthday4.jpg";
import engagement1 from "../../assets/pic/engagement1.jpg";
import engagement2 from "../../assets/pic/engagement2.jpg";
import engagement3 from "../../assets/pic/engagement3.jpg";
import engagement4 from "../../assets/pic/engagement4.jpg";
import baby1 from "../../assets/pic/baby1.jpg";
import baby2 from "../../assets/pic/baby2.jpg";
import baby3 from "../../assets/pic/baby3.jpg";
import baby4 from "../../assets/pic/baby4.jpg";
import retirement1 from "../../assets/pic/retirement1.jpg";
import retirement2 from "../../assets/pic/retirement2.jpg";
import retirement3 from "../../assets/pic/retirement3.jpg";
import retirement4 from "../../assets/pic/retirement4.jpg";
import anniversary1 from "../../assets/pic/anniversary1.jpg";
import anniversary2 from "../../assets/pic/anniversary2.jpg";
import anniversary3 from "../../assets/pic/anniversary3.jpg";
import anniversary4 from "../../assets/pic/anniversary4.jpg";
import Footer from "../Home/Footer";


const Gallery = () => {
    return (
        <div>
            <div className="mt-10 container mx-auto">
                <h1 className="text-6xl font-bold text-black text-center mb-3">Gallery</h1>
                <hr className=" w-48 md:w-56 mx-auto mt-2 h-1 mb-5 bg-slate-950" />
                <p className="text-[#a3a3a6] text-center mb-5">OUR RECENT PROJECTS</p>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Wedding Party Photograpy</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card  gap-3">
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={wedding1} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={wedding2} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={wedding3} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={wedding4} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center lg:text-left mt-5">Birthday Party Photograpy</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card  gap-3">
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={birthday1} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={birthday2} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={birthday3} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={birthday4} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center lg:text-left mt-5">Anniversary Party Photograpy</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card  gap-3">
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={anniversary1} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={anniversary2} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={anniversary3} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={anniversary4} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center lg:text-left mt-5">Engagement Party Photograpy</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card  gap-3">
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={engagement1} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={engagement2} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={engagement3} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={engagement4} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center lg:text-left mt-5">Retirement Party Photograpy</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card  gap-3">
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={retirement1} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={retirement2} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={retirement3} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={retirement4} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center lg:text-left mt-5">Baby Shower Photograpy</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card  gap-3">
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={baby1} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={baby2} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={baby3} alt="" />
                        </div>
                        <div>
                            <img className="rounded w-[400px] mx-auto md:w-full" src={baby4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;