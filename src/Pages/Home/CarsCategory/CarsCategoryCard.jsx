import React, { useContext, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const CarsCategoryCard = ({ toy }) => {

    const {user}=useContext(AuthContext)
   
    const {_id, toyName, image, price, rating } = toy;

    const handleAlert=()=>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!Please Login fast',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        
    }

    return (
        <div className="card w-full bg-base-100 shadow">
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

                <div className=" mt-5 w-full">
                    <Link to={`/toysdetails/${_id}`}><button onClick={handleAlert} className="btn btn-error btn-block ">Veiw Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CarsCategoryCard;