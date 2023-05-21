import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const [error,setError]=useState('')
    const navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero min-h-screen ">
            <Helmet>
                <title> ToysMurt | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 ">
                    <img className='w-full' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0  shadow-xl bg-base-100 w-1/3  mx-auto p-5">
                    <h1 className="text-5xl my-3 text-center font-bold">Please Login</h1>
                    <form onSubmit={handleLogin} >
                        <div>
                            <label htmlFor="">Email</label> <br />
                            <input className='border w-full p-3 rounded mt-4' type="email" name="email" id="" placeholder='Your Email' required />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="">passwoed</label> <br />
                            <input className='border w-full p-3 rounded  mt-4' type="password" name="password" id="" placeholder='Your Password' required />
                        </div>
                        <input className='mt-7 border btn btn-block  text-white bg-orange-500' type="submit" value="Login" />
                        <p className='text-red-600 mt-4'>{error}</p>
                    </form>
                    <div className="divider">OR</div>
                    <div>
                        <p onClick={handleGoogle} className='btn btn-block text-white bg-orange-500 '>Google</p>
                    </div>
                    <p className='mt-5 text-center'><span>  Don't Have an Account? <Link className='text-blue-600' to="/signup">Register</Link></span></p>
                </div>
            </div>
        </div>

    );
};

export default Login;