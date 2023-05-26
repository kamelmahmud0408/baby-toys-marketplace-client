import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Helmet } from 'react-helmet-async';

const ToysDetails = () => {

    const toyDetails = useLoaderData()
    
    const { _id, toyName, image, price, quantity, sellerName, email, rating, description } = toyDetails;

    return (
        <div className="card w-full bg-base-100 shadow mt-10">
            <Helmet>
                <title> ToysMart | Toy details</title>
            </Helmet>
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <div className='flex justify-evenly items-center'>
                    <div>
                        <h2 className="card-title">{toyName}</h2>
                        <h2 className='text-xl font-semibold mt-2 '>Price: $<span className='text-orange-500'>{price}</span></h2>
                        <div className='flex items-center mt-3'>
                            <p className='text-xl font-semibold '>Rating: {rating}</p>
                            <p className='ms-3'><Rating style={{ maxWidth: 100 }} value={rating} readOnly /></p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold  '>Seller Name: {sellerName}</h2>
                        <h2 className='text-xl font-semibold mt-2 '>Seller Email: {email}</h2>
                        <p className='mt-3 text-xl font-semibold'>Available Quantity: {quantity}</p>
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <h4 className='text-xl font-semibold ' >Description</h4>
                    <p className='text-center mt-2'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;