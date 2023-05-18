import React from 'react';
import { useForm } from 'react-hook-form';

const AddToy = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
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
                            
                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Seller Email</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("email")}
                            placeholder="email"
                        
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
                        <h3 className='text-xl font-semibold mb-3'>Availavle Quantity</h3>

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
                            <option value="regularCar">Regular Car</option>
                            <option value="fireTruck">Mini Fire Truck</option>
                            <option value="puliceCar">police car</option>
                            
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


                <input className=" btn btn-primary mt-5 w-full" value="Add Toy" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;