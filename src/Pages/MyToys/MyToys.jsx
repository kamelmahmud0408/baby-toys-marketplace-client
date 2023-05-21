import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    // const [activeTab,seActiveTab]=useState('')


    useEffect(() => {
        const url = `https://baby-toys-marketplace-server.vercel.app/toys?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyToys(data)
            })
    }, [user])

 const handleSort=(event)=>{
    const sort = event.target.value;
    fetch(`https://baby-toys-marketplace-server.vercel.app/sortByPrice?sort=${sort}`)
    .then(res =>res.json()
    .then(data=>{
        setMyToys(data)
    })
    )
 }

    return (
        <div>
            <div className='text-center'>
                <select onChange={handleSort} name="sort" >
                    <option value="1">Assending</option>
                    <option value="-1">Desending</option>
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