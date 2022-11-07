import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import banner from '../../assets/images/checkout/checkout-dark.jpg';
import './Checkout.css';

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            message
        }
        
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order placed successfully');
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='relative checkout-bg-banner mb-16' style={{ backgroundImage: `url( ${banner} )` }}>
                <h1 className='text-4xl font-bold text-white absolute transform -translate-y-1/2 left-10 md:left-24 top-1/2'>
                    {title}
                </h1>
            </div>

            <div className="bg-base-200 rounded-xl">
                <div className='px-10 md:px-20 lg:px-48 py-20 lg:py-28'>
                    <div className='bg-white p-5 mb-6 rounded-lg border-color'>
                        <h1 className="text-xl font-semibold mb-2">You are about to order: {title}</h1>
                        <h3 className='text-lg font-semibold base-color'>Price: {price}</h3>
                    </div>
                    <form onSubmit={handlePlaceOrder}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" required />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" required />
                            <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                            <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered w-full mt-6" placeholder="Message" required></textarea>
                        <input className="btn btn-error base-bg-color text-white w-full mt-6" type="submit" value="Place Your Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;