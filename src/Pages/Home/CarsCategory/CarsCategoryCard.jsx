import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const CarsCategoryCard = ({ toy }) => {

    const {_id, toyName, image, price, rating } = toy;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='h-80' src={image} alt="" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title font-bold">{toyName}</h2>
                    <p className='text-end'>Price: ${price}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-start'>Rating: {rating}</p>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                </div>

                <div className="card-actions mt-5 justify-center">
                    <Link to={`/toysdetails/${_id}`}><button className="btn btn-error">Veiw Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CarsCategoryCard;