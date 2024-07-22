import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SideNavbar from '../components/Navbar/SideNavbar';
import chickenMeal from '../assets/img/pic.png';
import tables from '../assets/img/tables.png';
import { LiaStarSolid } from "react-icons/lia";
import map from '../assets/img/map.png';
import CartButton from '../components/CartButton/CartButton';

export default function Franchise() {
    return (
        <>
            <Navbar />

            <section className='relative h-screen overflow-hidden'>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${chickenMeal})` }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className='font-fira text-3xl md:text-7xl font-bold'>Our Branches</h1>
                </div>

                <div className="absolute top-0 right-0 bottom-0 flex items-center justify-end p-4">
                    <SideNavbar />
                </div>
            </section>

            <section className='w-full my-16 md:my-32'>
                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
                    <h1 className='text-center font-fira text-4xl md:text-6xl'>Introducing New Look</h1>
                    <img src={tables} alt="tables" className='w-full md:w-3/4 lg:w-auto lg:px-16' />
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-8 md:py-16">
                <div className="flex flex-col items-start justify-center font-montserrat space-y-4 md:space-y-6">
                    <h1 className='text-4xl md:text-6xl font-fira font-bold'>Pouros and Sons</h1>
                    <p className='text-center md:text-left text-2xl md:text-3xl'>646 First Street, Quigleyville 36427 Country</p>
                    <div className="flex items-center justify-center space-x-1 md:space-x-2 text-xl md:text-2xl">
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <p className='text-center text-slate-400 px-2 md:px-4'>768-123 Reviews</p>
                    </div>
                    <p className='text-slate-400 text-left text-xl md:text-2xl'>0321-1234-123</p>
                </div>

                <div className='flex items-center justify-center'>
                    <img src={map} alt="map" className='w-full max-w-md md:max-w-lg' />
                </div>
            </section>

            <section className='w-full my-16 md:my-32'>
                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
                    <h1 className='text-center font-fira text-4xl md:text-6xl'>We Are Now In Bristol</h1>
                    <img src={tables} alt="tables" className='w-full md:w-3/4 lg:w-auto lg:px-16' />
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-8 md:py-16">
                <div className="flex flex-col items-start justify-center font-montserrat space-y-4 md:space-y-6">
                    <h1 className='text-4xl md:text-6xl font-fira font-bold'>Pouros and Sons</h1>
                    <p className='text-center md:text-left text-2xl md:text-3xl'>646 First Street, Quigleyville 36427 Country</p>
                    <div className="flex items-center justify-center space-x-1 md:space-x-2 text-xl md:text-2xl">
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <LiaStarSolid className='text-orange-500' />
                        <p className='text-center text-slate-400 px-2 md:px-4'>768-123 Reviews</p>
                    </div>
                    <p className='text-slate-400 text-left text-xl md:text-2xl'>0321-1234-123</p>
                </div>

                <div className='flex items-center justify-center'>
                    <img src={map} alt="map" className='w-full max-w-md md:max-w-lg' />
                </div>
            </section>

            <CartButton />

            <Footer />
        </>
    );
}