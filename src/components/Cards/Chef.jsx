import React from 'react';
import estwood from '../../assets/img/Rectangle 8863.png';

export default function Chef() {
    const categoryLinks = {
        chef1: {
            name: 'D.Estwood',
            img: estwood,
            role: 'Chief Chef',
        },
        chef2: {
            name: 'D.Estwood',
            img: estwood,
            role: 'Chief Chef',
        },
        chef3: {
            name: 'D.Estwood',
            img: estwood,
            role: 'Chief Chef',
        },
        chef4: {
            name: 'D.Estwood',
            img: estwood,
            role: 'Chief Chef',
        },
    }

    return (
        <section className='flex flex-col items-center justify-center space-y-6 pt-16 pb-32 px-6 md:px-12'>
            <h1 className="text-3xl md:text-5xl font-semibold">Meet Our Chef</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-items-center">
                {
                    Object.keys(categoryLinks).map((key, index) => (
                        <div key={index} className='relative flex flex-col items-center justify-center hover:scale-105 duration-300 ease-in-out transition'>
                            <img src={categoryLinks[key].img} alt={categoryLinks[key].name} className='object-cover h-48 w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 rounded-lg' />
                            <div className='text-center mt-4'>
                                <h2 className='text-xl font-semibold'>{categoryLinks[key].name}</h2>
                                <p className='text-sm text-gray-600'>{categoryLinks[key].role}</p>
                            </div>
                        </div>
                    ))
                }

                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center mt-6">
                    <button className="relative z-10 rounded-xl bg-buttonColor text-white py-2 px-4 md:py-3 md:px-6 font-montserrat text-sm md:text-base hover:bg-buttonHoverColor duration-300 ease-in-out transition">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    )
}