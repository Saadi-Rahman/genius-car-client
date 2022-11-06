import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions items-center justify-end">
                    <p className='text-lg font-semibold base-color'>Price: ${price}</p>
                    <button className="btn btn-ghost base-color text-lg"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;