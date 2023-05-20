import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/mytoys'

    const toys = useLoaderData()
    const { _id, toyName, image, price, quantity, rating, description } = toys;
    console.log(toys)


    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        
        fetch(`https://baby-toys-marketplace-server.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount >0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate(from, { replace: true })
            })
    }


    return (
        
        <div className='mt-10' >
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}

                <div className='grid grid-cols-2 gap-3'>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Toy Name</h3>

                        <input
                            className=" w-full p-2 border"
                            {...register("toyName")}
                            placeholder="Toy Name"
                            defaultValue={toyName}

                        />

                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Photo URL</h3>
                        <input
                            className="w-full p-2 border"
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                            defaultValue={image}

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
                            defaultValue={price}

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Available Quantity</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("quantity")}
                            placeholder="Available Quantity"
                            defaultValue={quantity}

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Rating</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("rating")}
                            placeholder="Rating"
                            defaultValue={rating}

                        />

                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Name</h3>
                        <select className="w-full p-2 border" {...register("category")}>
                            <option value="RegularCar">Regular Car</option>
                            <option value="Truck"> Regular Truck</option>
                            <option value="PuliceCar">police car</option>

                        </select>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Description</h3>

                        <input
                            className="w-full p-4 border"
                            {...register("description")}
                            placeholder="Description"
                            defaultValue={description}

                        />

                    </div>
                </div>


                <input  className=" btn btn-primary mt-5 w-full" value="update Toy" type="submit" />
            </form>
        </div>
    );
};

export default UpdateToy;