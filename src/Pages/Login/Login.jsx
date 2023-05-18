import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 lg:text-left">
                    <img className='w-full' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0  shadow-xl bg-base-100 w-1/3  mx-auto p-5">
                    <h1 className="text-5xl my-3 text-center font-bold">Please Login</h1>
                    <form  >
                        <div>
                            <label htmlFor="">Email</label> <br />
                            <input className='border w-full p-2 mt-4' type="email" name="email" id="" placeholder='Your Email' required />
                        </div>
                        <div>
                            <label htmlFor="">passwoed</label> <br />
                            <input className='border w-full p-2 mt-4' type="password" name="password" id="" placeholder='Your Password' required />
                        </div>
                        <input className='mt-7 border btn btn-block  text-white bg-orange-500' type="submit" value="Login" />
                        <p className='text-red-600 mt-4'></p>
                    </form>
                    <div className="divider">OR</div>
                    <div>
                         <p className='btn btn-block text-white bg-orange-500 '>Google</p>
                    </div>
                    <p className='mt-5 text-center'><span>  Don't Have an Account? <Link className='text-blue-600' to="/regestration">Register</Link></span></p>
                </div>
            </div>
        </div>

    );
};

export default Login;