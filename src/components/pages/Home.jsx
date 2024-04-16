import Banner from "./homePage/Banner";
import Information from "./homePage/Information";

const Home = () => {
    return (
        <div className="mainContainer bg-light-color">
            <Banner></Banner>
            <Information></Information>
        </div>
    );
};

export default Home;