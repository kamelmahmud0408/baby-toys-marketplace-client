import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import CarsCategory from '../CarsCategory/CarsCategory';
import CustomerReview from '../CustomerReview/CustomerReview';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from '../AboutUs/AboutUs';
AOS.init({
  duration: 1200,
});

const Home = () => {
    return (
      <div data-aos="zoom-in">
        
         <Banner></Banner>
         <PhotoGallery></PhotoGallery>
         <CarsCategory></CarsCategory>
         <CustomerReview></CustomerReview>
         <AboutUs></AboutUs>
      </div>
    );
};

export default Home;