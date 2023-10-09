import about from "../../assets/pic/about_us.jpg";

const About = () => {
    return (
        <div className="mt-14">
            <div className=" flex items-center justify-between py-5 container mx-auto">
                <hr className=" w-[400px] h-1 lg:mr-5 bg-[#e4336a]" />
                <h1 className="text-xl lg:text-2xl font-bold mb-4 text-center text-[#e4336a]  mt-5">Makes overseas weddings so much easier</h1>
                <hr className="w-[400px] h-1 bg-[#e4336a] lg:ml-5 " />
            </div>

            <div className="flex  flex-col-reverse lg:flex-row justify-center gap-3 lg:w-1/2 mx-auto mt-5">
                <p className="text-base text-center lg:text-left">The first and only International online booking platform which offers Real-Time Availability and delivers Instant Confirmation of event dates at the most popular venues abroad. <br /> <br />The platform allows users to browse directories of the most popular hotel and municipal venues in different destinations to help all people select their preferred location for a event abroad. Once the venue is chosen, the system can provide up-to-date availability information so a set date can be booked and confirmed Instantly. <br /><br /> Access is available free of charge to any user. A reasonable fee is charged only when users are ready to book a confirmed date and venue. <br /> <br /> The platform offers the opportunity to users, either B2B or B2C, not to just book events dates Instantly, but also to make pre-bookings way in advance. </p>
                <img className=" w-[400px] mx-auto lg:w-[500px] h-[300px]" src={about} alt="" />
            </div>
            <div className="lg:w-1/2 mx-auto mt-10 text-center lg:text-start">
                <h1 className="text-2xl text-[#e4336a] text-center ">Our Partner</h1>
                <hr className=" w-[200px] h-1 bg-[#e4336a] mx-auto mb-5" />
                <p className="font-medium text-base ">TUI UK is one of the leading travel companies in the world, with all their holidays designed to help you Discover Your Smile. TUI UK has been a strategic partner of BookYourWeddingDay.com since day one, and are using the platform for booking wedding dates for their customers instant As a customer, when you book a wedding date through our site at a hotel/venue which is featured in TUI’s weddings program, you have the opportunity if you wish to provide TUI with your booking reference and they will be able to take your booking over and assist you with a holiday package and a wedding package as well.</p>
            </div>
        </div>
    );
};

export default About;