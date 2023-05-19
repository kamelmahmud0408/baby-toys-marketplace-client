import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/toys?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyToys(data)
            })
    }, [])

    return (
        <div>
            <h2>{myToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        myToys.map(mytoy=><MyToysRow key={mytoy._id} mytoy={mytoy}></MyToysRow>)
                     }      
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyToys;