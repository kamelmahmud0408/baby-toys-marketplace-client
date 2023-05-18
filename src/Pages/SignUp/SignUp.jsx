import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 ">
                    <img className='w-full' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0  shadow-xl bg-base-100 w-1/3  mx-auto p-5">
                    <h1 className="text-5xl my-3 text-center font-bold">Please Sign up</h1>
                    <form  >
                        <div className='mt-4'>
                            <label htmlFor="name">Name</label> <br />
                            <input className='border w-full p-3 rounded  mt-4' type="text" name="displayName" id="" placeholder='Your Name' required />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="photo">Photo URL</label> <br />
                            <input className='border w-full p-3 rounded  mt-4' type="text" name="photo" id="" placeholder='Your Photo URL' required />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="">Email</label> <br />
                            <input className='border w-full p-3 rounded mt-4' type="email" name="email" id="" placeholder='Your Email' required />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="">passwoed</label> <br />
                            <input className='border w-full p-3 rounded  mt-4' type="password" name="password" id="" placeholder='Your Password' required />
                        </div>
                        <input className='mt-7 border btn btn-block  text-white bg-orange-500' type="submit" value="Login" />
                        <p className='text-red-600 mt-4'></p>
                    </form>
                    <div className="divider">OR</div>
                    <div>
                        <p className='btn btn-block text-white bg-orange-500 '>Google</p>
                    </div>
                    <p className='mt-5 text-center'><span>  Already have an account ? Please <Link className='text-blue-600' to="/login">login</Link></span></p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;