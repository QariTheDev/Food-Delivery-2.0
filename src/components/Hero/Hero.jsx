import React from 'react';
import chickenMeal from '../../assets/img/close-up-delicious-chicken-meal.jpg';
import SideNavbar from '../Navbar/SideNavbar';

export default function Hero() {
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 h-screen">
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${chickenMeal})` }}
                ></div>
                <div className="absolute inset-0 bg-transBlack backdrop-blur-lg"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-start py-10 md:py-20 px-8 md:px-32 space-y-9 text-white">
                    <div className="text-white flex flex-col space-y-5">
                        <h2 className="text-2xl md:text-3xl font-great-vibes">Its Quick & Amusing!</h2>
                        <h1 className="font-bold text-3xl md:text-5xl">Lorem ipsum dolor sit amet consectetur.</h1>
                        <p className="text-md md:text-lg font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                    </div>
                    <div className="flex justify-center w-full">
                        <button className="py-3 md:py-5 px-6 md:px-10 rounded-2xl font-sans text-white bg-buttonColor hover:bg-buttonHoverColor transition-all ease-in-out duration-300">
                            See Menu
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative h-screen">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${chickenMeal})` }}></div>
                <div className="absolute inset-0 bg-transBlack"></div>

                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-end">
                    <SideNavbar />
                </div>
            </div>
        </section>
    );
}