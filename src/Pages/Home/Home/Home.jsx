import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import CarsCategory from '../CarsCategory/CarsCategory';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
      <div>
         <Banner></Banner>
         <PhotoGallery></PhotoGallery>
         <CarsCategory></CarsCategory>
         <CustomerReview></CustomerReview>
      </div>
    );
};

export default Home;