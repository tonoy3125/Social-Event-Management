import { useLoaderData } from "react-router-dom";
import Service from "./Service";


const Services = () => {
    const events = useLoaderData()
    console.log(events)
    return (
        <div className=" mt-10 bg-[#f2f2f4cc] mb-10 pb-3">
            <h1 className="text-5xl font-bold text-center mb-3">Our Services</h1>
            <h2 className="text-center text-xl font-semibold text-[#272530] mb-3">It’s simple. You have an event to plan and we have <span className="text-[#fcb41e]">the solutions</span></h2>
            <p className="text-[#a3a3a6] text-sm text-center mb-5">HERE IS HOW WE CAN HELP YOU</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto ">
                {
                    events.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;