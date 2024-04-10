import Banner from "../Banner";
import {Row, Col, Container } from "react-bootstrap";

const Home = () => {
    return (
        <section className="mainContainer">
            <Banner></Banner>
            <Container></Container>
        </section>
    );
};

export default Home;