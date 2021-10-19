import React from 'react';
import AskedQuestions from '../AskedQuestions/AskedQuestions';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
// import Footer from '../Footer/Footer';
import Main from '../Main/Main';
// import Navigation from '../Navigation/Navigation';


const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <Main></Main>
            <AskedQuestions></AskedQuestions>
            <Blogs></Blogs>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;