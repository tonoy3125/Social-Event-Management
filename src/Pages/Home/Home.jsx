import Services from "../Services/Services";
import Banner from "./Banner";
import Footer from "./Footer";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;