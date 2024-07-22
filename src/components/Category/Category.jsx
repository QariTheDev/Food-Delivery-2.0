import React from 'react';
import dessert from '../../assets/img/unsplash_-lHZUkiWM74.png';
import burger from '../../assets/img/unsplash_dphM2U1xq0U.png';
import dessert2 from '../../assets/img/unsplash_MRHyv-hHxgk.png';
import donuts from '../../assets/img/unsplash_q54Oxq44MZs.png';

export default function Category() {
    const categoryLinks = {
        dessert: {
            name: 'Dessert',
            img: dessert,
        },
        fastFood: {
            name: 'Fast Food',
            img: burger,
        },
        dessert2: {
            name: 'Dessert',
            img: dessert2,
        },
        dessert3: {
            name: 'Dessert',
            img: donuts,
        }
    }

    return (
        <section className='flex flex-col items-center justify-center space-y-6 pt-16 pb-32 px-6 md:px-12'>
            <h1 className="text-3xl md:text-5xl font-semibold">Food Category</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    Object.keys(categoryLinks).map((key, index) => (
                        <div key={index} className='relative flex flex-col items-center justify-center hover:scale-105 duration-300 ease-in-out transition'>
                            <img src={categoryLinks[key].img} alt={categoryLinks[key].name} className='object-cover h-48 w-full md:h-60 md:w-60 lg:h-72 lg:w-72 rounded-lg' />
                            <div className='absolute inset-0 flex items-center justify-center backdrop-blur-sm'>
                                <div className='bg-transBlackNavbar opacity-60 rounded-lg absolute inset-0'></div>
                                <button className="relative z-10 rounded-xl bg-buttonColor text-white py-2 px-4 md:py-3 md:px-5 font-montserrat text-sm md:text-base hover:bg-buttonHoverColor duration-300 ease-in-out transition">
                                    {categoryLinks[key].name}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}