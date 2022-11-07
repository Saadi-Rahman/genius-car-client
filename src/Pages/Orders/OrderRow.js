import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
    const {_id, serviceName, customer, phone, email, price, message, service, status} = order;
    const [orderService, setOrderService] = useState({});

    useEffect( () =>{
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square btn-outline base-color">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="text-lg font-bold">{serviceName}</div>
                        <div className='text-sm font-semibold base-color'>${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer} <br/>
                <span className="badge badge-ghost badge-sm">{phone}</span> <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{message}</td>
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-outline btn-ghost btn-sm">{status ? status : "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrderRow;