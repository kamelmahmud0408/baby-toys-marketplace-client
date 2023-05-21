import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AddToy = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/mytoys'


    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        fetch('https://baby-toys-marketplace-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate(from, { replace: true })
            })
    }


    return (
        <div className='mt-10' >
            <Helmet>
                <title> ToysMurt | Add toy</title>
            </Helmet>
            <h1 className='text-center text-3xl text-orange-500 font-bold my-10'>Add a Toy</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}

                <div className='grid grid-cols-2 gap-3'>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Toy Name</h3>

                        <input
                            className=" w-full p-2 border"
                            {...register("toyName")}
                            placeholder="Toy Name"

                        />

                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Photo URL</h3>
                        <input
                            className="w-full p-2 border"
                            {...register("image")}
                            placeholder="image link"
                            type="url"

                        />
                    </div>

                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Seller Name</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("sellerName")}
                            placeholder="SellerName"
                            defaultValue={user?.displayName}

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Seller Email</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("email")}
                            placeholder="email"
                            defaultValue={user?.email}

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Price</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("price")}
                            placeholder="Price"

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Available Quantity</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("quantity")}
                            placeholder="Available Quantity"

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Rating</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("rating")}
                            placeholder="Rating"

                        />

                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Name</h3>
                        <select className="w-full p-2 border" {...register("category")}>
                            <option value="RegularCar">Regular Car</option>
                            <option value="Truck">  Truck</option>
                            <option value="PuliceCar">police car</option>

                        </select>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Description</h3>

                        <input
                            className="w-full p-4 border"
                            {...register("description")}
                            placeholder="Description"

                        />

                    </div>
                </div>


                <input className=" btn btn-error mt-5 w-full" value="Add Toy" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;