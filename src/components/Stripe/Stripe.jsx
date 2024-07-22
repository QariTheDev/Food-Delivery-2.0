import React from 'react';
import frame from '../../assets/img/frame4.png';

export default function Stripe() {
    return (
        <section 
            style={{
                backgroundImage: `url(${frame})`,
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'cover',
            }} 
            className='w-full h-auto py-16 px-4 md:px-8 lg:px-16'
        >
            <div className="flex flex-col items-center justify-center text-white space-y-8">
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center'>
                    Book Early & Save
                </h1>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>
                    Lorem ipsum dolor sit amet consectetur
                </h2>
                <button className="rounded-xl bg-buttonColor text-white py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-11 font-montserrat text-sm md:text-base lg:text-lg hover:bg-buttonHoverColor duration-300 ease-in-out transition">
                    Book Now
                </button>
            </div>
        </section>
    )
}
