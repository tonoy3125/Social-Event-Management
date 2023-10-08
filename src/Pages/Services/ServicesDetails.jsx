import { useLoaderData, useParams } from "react-router-dom";
import { BiDollarCircle } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import { LuCalendarDays } from 'react-icons/lu';
import { BsTelephone } from 'react-icons/bs';

import toast, { Toaster } from "react-hot-toast";
import Footer from "../Home/Footer";

const ServicesDetails = () => {

    const handleBooking = () => {
        toast.success('You booking is succesful.Our Team member will contact soon')
    }

    const events = useLoaderData()
    const { id, name, image, price, details, planning, decoration, venue_Selection, catering, services, hospitality, others, long_description } = useParams()
    const service = events.find(service => service.id === id)
    return (
        <div className="bg-[#fdfcf8] mt-10">
            <div className="grid grid-cols-1  lg:grid-cols-4 container mx-auto">
                <div className="col-span-3">
                    <img className="w-full pr-6 pt-4 " src={service.image} alt="" />
                    <h1 className=" text-4xl font-bold mt-3 mb-3">{service.name}</h1>
                    <p className="text-base pr-6 font-semibold">{service.long_description}</p>
                </div>
                <div className=" bg-[#F3F3F3] p-4 md:w-full mt-4 h-[500px]">
                    <h1 className="text-2xl font-bold text-center text-[#dc3545]">What We Do</h1>
                    <hr className="h-1 bg-black mt-2" />
                    <div className="p-5">
                        <li className="text-lg font-bold text-[#7c7c7c] hover:text-purple-700 cursor-pointer">{service.details.planning}</li>
                        <li className="text-lg font-bold text-[#7c7c7c] hover:text-purple-700 cursor-pointer">{service.details.decoration}</li>
                        <li className="text-lg font-bold text-[#7c7c7c] hover:text-purple-700 cursor-pointer">{service.details.venue_Selection}</li>
                        <li className="text-lg font-bold text-[#7c7c7c] hover:text-purple-700 cursor-pointer">{service.details.catering}</li>
                        <li className="text-lg font-bold text-[#7c7c7c] hover:text-purple-700 cursor-pointer">{service.details.services}</li>
                        <li className="text-lg font-bold text-[#7c7c7c] hover:text-purple-700 cursor-pointer">{service.details.hospitality}</li>
                        <li className="text-lg font-bold text-[#7c7c7c] hover:text-purple-700 cursor-pointer">{service.details.others}</li>


                        <div className="flex items-center gap-3 mt-3 mb-2">
                            <h1 className="text-xl font-bold">Pakage Price : </h1>
                            <div className="flex items-center gap-2">
                                <BiDollarCircle className="text-xl"></BiDollarCircle>
                                <p className="text-xl font-bold">USD {service.price}</p>
                            </div>

                        </div>
                        <p className="text-base font-bold mt-1 text-[#e3342f]">Note : Service Charge 20% </p>
                        <h1 className="font-bold mt-2 text-[#e3342f]">Booking method : 50% Advance</h1>
                        <button onClick={handleBooking} className="btn-md rounded-xl mt-5 text-center bg-[#009f65] ml-24 text-white">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-5 flex gap-3 flex-col lg:flex-row mb-10">
                <div className="flex-1">
                    <h1 className="text-4xl text-center font-bold mb-5">FAQ’s</h1>
                    <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" checked="checked" />
                        <div className="collapse-title text-xl font-bold">
                            Do you offer any discounts?
                        </div>
                        <div className="collapse-content">
                            <p > We accept several discounts and vouchers.We have partnered with many B&Bs and hotels in the local area to offer 20% off vouchers to those who are supporting local businesses by staying in Wells. Please speak to your Hotel or B&B to see if they have signed up to this scheme.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-bold">
                            Do you offer refunds for event bookings?
                        </div>
                        <div className="collapse-content">
                            <p>All online, over the phone and in person payments are final. We recommend that customers check dates and timings before completing any bookings.We reserve the right to postpone or cancel an event for reasons beyond our control. We will refund or transfer any deposits or balances paid for events cancelled. On occasions where a refund is given, refunds will only be made to the person who originally made the purchase through the method of payment they originally used.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-bold">
                            Is there a smoking area?
                        </div>
                        <div className="collapse-content">
                            <p>No – smoking is not permitted anywhere on site. Staff and volunteers have been asked to notify visitors of this – so please do not be offended if you are approached about this within any place.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-center mb-5 mt-5 lg:mt-0">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:mt-10 gap-3 p-5">

                        <div className="flex items-center gap-2 mb-2">
                            <HiOutlineLocationMarker className="text-4xl"></HiOutlineLocationMarker>
                            <div>
                                <h3 className="text-base font-bold text-[#272530]">Postal Address</h3>
                                <p className="text-[#676767] font-medium text-sm">Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <BiTimeFive className="text-4xl"></BiTimeFive>
                            <div>
                                <h3 className="text-base font-bold text-[#272530]">Open Hours</h3>
                                <p className="text-[#676767] font-medium text-sm">Monday – Friday 8.00 am – 5.00 pm, Weekend Closed</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsTelephone className="text-4xl"></BsTelephone>
                            <div>
                                <h3 className="text-base font-bold text-[#272530]">Phone & E-mail</h3>
                                <p className="text-[#676767] font-medium text-sm">Phone: 1-800-64-38
                                    Fax: 1-800-64-39
                                    info@ancorathemes.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <LuCalendarDays className="text-4xl"></LuCalendarDays>
                            <div>
                                <h3 className="text-base font-bold text-[#272530]">Sessions</h3>
                                <p className="text-[#676767] font-medium text-sm">Mornings: 8 am – 12 am, Afternoons: 1 pm – 5 pm, Full Day: 8 am – 5 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>



            <Toaster />
        </div>
    );
};

export default ServicesDetails;