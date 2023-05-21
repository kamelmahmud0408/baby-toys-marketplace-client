import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/login'

    const { createUser, signInWithGoogle, logOut } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.displayName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)


        setError('')

        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUser(loggedUser, name, photo)
                logOut(navigate(from, { replace: true }))
            })
            .catch(error => {
                console.log(error)
            })

    }

    const updateUser = (loggedUser, name, photo) => {
        updateProfile(loggedUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => { })
            .catch(error => {
                console.log(error)
            })

    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <div className="hero min-h-screen ">
            <Helmet>
                <title> ToysMurt | Sign up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 ">
                    <img className='w-full' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0  shadow-xl bg-base-100 w-1/3  mx-auto p-5">
                    <h1 className="text-5xl my-3 text-center font-bold">Please Sign up</h1>
                    <form onSubmit={handleSignUp} >
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
                        <p onClick={handleGoogle} className='btn btn-block text-white bg-orange-500 '>Google</p>
                    </div>
                    <p className='mt-5 text-center'><span>  Already have an account ? Please <Link className='text-blue-600' to="/login">login</Link></span></p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;