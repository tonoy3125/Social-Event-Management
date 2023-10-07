import { useLoaderData, useParams } from "react-router-dom";


const ServicesDetails = () => {
    const events = useLoaderData()
    const { id, name, image } = useParams()
    const service = events.find(service => service.id === id)
    return (
        <div>

        </div>
    );
};

export default ServicesDetails;