import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';
import { Helmet } from 'react-helmet-async';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
   

    useEffect(() => {
        const url = `https://baby-toys-marketplace-server.vercel.app/toys?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                
                setMyToys(data)
            })
    }, [user])

    const handleSort = (event) => {
        const sort = event.target.value;
        fetch(`https://baby-toys-marketplace-server.vercel.app/sortByPrice?user=${user.email}&&sort=${sort}`)
            .then(res => res.json()
                .then(data => {
                    setMyToys(data)
                })
            )
    }

    return (
        <div>
            <h1 className='text-4xl text-center my-5 text-orange-500 font-bold'>My Toys</h1>
            <Helmet>
                <title> ToysMart | My Toys</title>
            </Helmet>
            <div className='text-center text-xl font-semibold'>
                <span className='me-3 text-orange-500'>Sort By</span>
                <select onChange={handleSort} name="sort" >
                    <option value="1">Low to High Price</option>
                    <option value="-1">High to Low Price</option>
                </select>
            </div>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                delete
                            </th>
                            <th>image</th>
                            <th>toy name</th>
                            <th>seller name</th>
                            <th>email</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>rating</th>
                            <th>category</th>
                            <th>descrittion</th>
                            <th>update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(mytoy => <MyToysRow key={mytoy._id} mytoy={mytoy} myToys={myToys} setMyToys={setMyToys}></MyToysRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;