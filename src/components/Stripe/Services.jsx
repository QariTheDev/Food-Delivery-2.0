import React from 'react';
import { MdOutlineRoomService } from "react-icons/md";
import { MdLocalDining } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";

export default function Stripe() {
    return (
        <>
            <section className='w-full bg-buttonColorLight h-auto py-16'>
                <div className="flex flex-col items-center justify-center text-black space-y-9 px-6 md:px-24">
                    <h1 className='text-4xl md:text-6xl py-8 md:py-16'>Our Services</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
                            <MdOutlineRoomService className='text-5xl md:text-7xl text-slate-500' />
                            <h2 className='text-xl md:text-2xl font-semibold'>Concierge Service</h2>
                            <p className='text-center text-sm md:text-base font-montserrat'>
                                Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero.
                                Scelerisque sed enim.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
                            <MdLocalDining className='text-5xl md:text-7xl text-slate-500' />
                            <h2 className='text-xl md:text-2xl font-semibold'>Dining Experience</h2>
                            <p className='text-center text-sm md:text-base font-montserrat'>
                                Lorem ipsum dolor sit amet consectetur. Felis quam ut elementum non a consectetur.
                                Vel ornare purus pretium ut.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
                            <FaCalendarDays className='text-5xl md:text-7xl text-slate-500' />
                            <h2 className='text-xl md:text-2xl font-semibold'>Event Planning</h2>
                            <p className='text-center text-sm md:text-base font-montserrat'>
                                Lorem ipsum dolor sit amet consectetur. Consequat pretium pellentesque venenatis odio cras posuere leo nulla etiam.
                                Massa enim arcu mi tristique proin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full bg-white h-auto py-16'>
            </section>
        </>
    );
}