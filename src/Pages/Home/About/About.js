import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mb-32">
            <div className="hero-content flex-col lg:flex-row md:p-0 gap-12">
                <div className='relative md:w-1/2'>
                    <img src={person} alt="" className="rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={parts} alt="" className="absolute rounded-lg shadow-2xl right-5 top-1/2 w-3/5" />
                </div>
                <div className='md:w-1/2'>
                    <h3 className='text-2xl font-bold base-color mb-2'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error base-bg-color text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;