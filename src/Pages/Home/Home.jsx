import Services from "../Services/Services";
import Banner from "./Banner";
import Footer from "./Footer";
import Team from "./Team";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;