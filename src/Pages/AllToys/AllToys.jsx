import React, { useEffect, useState } from 'react';


const AllToys = () => {

    const [toys,setToys]=useState([])
 
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res =>res.json())
        .then(data =>{console.log(data)
            setToys(data)})
    },[])
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy,index)=> <tr>
                            <th>{index+1}</th>
                            <td>{toy.toyName}</td>
                            <td>{toy.sellerName}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>{toy.category}</td>
                        </tr>)
                    }
                    {/* row 1 */}
                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;