import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysRow = ({ mytoy, myToys, setMyToys }) => {
    const { _id, toyName, image, sellerName, email, price, quantity, rating, description, category } = mytoy;


    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://baby-toys-marketplace-server.vercel.app/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remainingToys = myToys.filter(toys => toys._id !== _id)
                            setMyToys(remainingToys)
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                {email}
            </td>
            <td>
                {price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                {rating}
            </td>
            <td>
                {category}
            </td>
            <td>
                {description.slice(0, 20)} <span
                    >...</span>
            </td>
            <th>
                <Link to={`/updatetoy/${_id}`}><button className="btn btn-error btn-xs">update</button></Link>
            </th>
        </tr>
    );
};

export default MyToysRow;