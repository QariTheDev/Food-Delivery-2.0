import React from 'react';
import { FaCheck } from "react-icons/fa6";
import eggs from '../assets/img/eggs.png';
import rolls from '../assets/img/unsplash_jpkfc5_d-DI@2x.png';
import sandwich from '../assets/img/unsplash_mAQZ3X_8_l0.png';
import CartButton from '../components/CartButton/CartButton';

export default function About() {
    return (
        <section className="py-16 px-6 md:px-12 bg-white text-darkGrey mt-110 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-7">
                    <div className="space-y-7">
                        <h1 className="font-fira font-semibold text-2xl md:text-3xl">About Us</h1>
                        <h2 className="font-fira text-4xl md:text-5xl">We Create the Best <br /> Foody Products</h2>
                        <p className="text-base md:text-lg font-montserrat">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
                            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <FaCheck className="text-primary text-xl md:text-2xl" />
                                <h3 className="text-sm md:text-base ml-3">Lacus nisi, et ac dapibus sit eu velit in consequat</h3>
                            </div>
                            <div className="flex items-center">
                                <FaCheck className="text-primary text-xl md:text-2xl" />
                                <h3 className="text-sm md:text-base ml-3">Quisque diam pellentesque bibendum non dui volutpat fringilla</h3>
                            </div>
                            <div className="flex items-center">
                                <FaCheck className="text-primary text-xl md:text-2xl" />
                                <h3 className="text-sm md:text-base ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                            </div>
                        </div>

                        <button className="rounded-xl bg-buttonColor text-white py-2 px-4 md:py-3 md:px-5 font-montserrat hover:bg-buttonHoverColor duration-300 ease-in-out transition">Read More</button>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="relative h-64 md:h-auto">
                        <img src={eggs} alt="eggs" className="object-cover w-full h-full rounded-lg" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-48 md:h-auto">
                            <img src={rolls} alt="rolls" className="object-cover w-full h-full rounded-lg" />
                        </div>
                        <div className="relative h-48 md:h-auto">
                            <img src={sandwich} alt="sandwich" className="object-cover w-full h-full rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <CartButton />
        </section>
    );
}