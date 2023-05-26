import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const AllToys = () => {
    const [searchText, setSearchText] = useState('')
    const [toys, setToys] = useState([])
    const {user}=useContext(AuthContext)

    useEffect(() => {
        fetch('https://baby-toys-marketplace-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    const handleSearch = () => {
        fetch(`https://baby-toys-marketplace-server.vercel.app/getToysByText/${searchText}`)
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
    }

    const handleAlert=()=>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!You have to log in first to view details',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        
    }

    return (
        <div>
            <h1 className='text-4xl text-center my-5 text-orange-500 font-bold'>All Toys</h1>
            <Helmet>
                <title> ToysMart | All Toys</title>
            </Helmet>
            <div className='text-center my-5'>
                <input onChange={(e) => setSearchText(e.target.value)} className=' border-2 border-orange-500 rounded p-3' placeholder='Search by toy name' type="text" />
                <button className='btn  btn-error px-4 ms-4' onClick={handleSearch}>Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{toy.toyName}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>{toy.category}</td>
                                <td><Link to={`/toysdetails/${toy._id}`}><button onClick={handleAlert} className='btn btn-error'>veiw Details</button></Link></td>
                            </tr>)
                        }
                        {/* row 1 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;