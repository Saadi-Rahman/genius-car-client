import React from 'react';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-10 md:left-24 top-1/2">
                <h1 className='text-3xl md:text-6xl font-bold text-white md:leading-tight'>
                    Affordable <br /> Price for Car <br /> Servicing
                </h1>
                <div className='w-3/4 py-2 md:py-6'>
                    <p className='text-xs md:text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-error mr-3 md:mr-5 text-white">Discover More</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md glass">Latest Project</button>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-3">
                <a href={`#slide${prev}`} className="btn btn-sm md:btn-md btn-circle mr-2 md:mr-4">❮</a> 
                <a href={`#slide${next}`} className="btn btn-sm md:btn-md btn-circle">❯</a>
            </div>
        </div> 
    );
};

export default BannerItem;