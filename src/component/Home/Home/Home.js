import React from 'react';
import ClientIcon from '../ClientIcon/ClientIcon';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import SomeWoks from '../SomeWorks/SomeWoks';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientIcon></ClientIcon>
            <Services></Services>
            <SomeWoks></SomeWoks>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;