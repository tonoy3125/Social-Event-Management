import { BiDollarCircle } from 'react-icons/bi';

const Service = ({ service }) => {
    const { id, name, image, price, short_description } = service;
    return (
        <div>
            <div className="card   shadow-xl">
                <figure ><img className="mb-3" src={image} alt="Shoes" /></figure>
                <h1 className="text-2xl font-bold mb-3 px-2">{name}</h1>
                <p className="text-base font-medium mb-3 px-2">{short_description}</p>
                <div className="flex items-center justify-evenly mb-4">
                    <div className='flex items-center gap-2'>
                        <BiDollarCircle className="text-xl"></BiDollarCircle>
                        <p className='text-base font-bold'>{price}</p>
                    </div>
                    <button className="bg-[#cf2e2e] btn-sm rounded-lg text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;