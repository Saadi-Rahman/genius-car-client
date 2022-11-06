import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className='mb-20 md:pt-12'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold base-color mb-2'>Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6 mb-2">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            </div>
            <div className='md:mx-8'>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
            <div className='text-center my-10'>
                <button className="btn btn-error base-bg-color text-white">More Services</button>
            </div>
        </div>
    );
};

export default Services;