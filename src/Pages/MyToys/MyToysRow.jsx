import React from 'react';

const MyToysRow = ({mytoy}) => {
    const {_id,toyName,image,sellerName,email,price,quantity,rating,description}=mytoy;
    return (
        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
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
                                        <div className="font-bold">{email}</div>
                                        <div className="text-sm opacity-50">{sellerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {toyName}
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
                                {description}
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
    );
};

export default MyToysRow;