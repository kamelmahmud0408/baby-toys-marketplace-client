import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import CarsCategory from '../CarsCategory/CarsCategory';
import CustomerReview from '../CustomerReview/CustomerReview';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from '../AboutUs/AboutUs';
import { Helmet } from 'react-helmet-async';
AOS.init({
  duration: 1200,
});

const Home = () => {

  return (
    <div data-aos="zoom-in">
      <Helmet>
        <title> ToysMart | Home</title>
      </Helmet>
      <Banner></Banner>
      <div data-aos="fade-down">
        <PhotoGallery></PhotoGallery>
      </div>
      <div data-aos="fade-up-right">
        <CarsCategory></CarsCategory>
      </div>

      <div data-aos="fade-up">
        <CustomerReview></CustomerReview>
      </div>

      <div data-aos="fade-left">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;