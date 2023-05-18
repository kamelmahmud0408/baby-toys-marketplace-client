import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import CarsCategory from '../CarsCategory/CarsCategory';

const Home = () => {
    return (
      <div>
         <Banner></Banner>
         <PhotoGallery></PhotoGallery>
         <CarsCategory></CarsCategory>
      </div>
    );
};

export default Home;