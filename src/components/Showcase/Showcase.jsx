import React from 'react'
import tables from '../../assets/img/pic.png'
import tables2 from '../../assets/img/Picture → 14-1-600x400.jpg.webp.png'

export default function Showcase() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 py-20 px-6 md:px-20 font-montserrat">
                <div className='row-span-2 md:row-auto'>
                    <img src={tables} alt="tables" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col justify-start items-end pt-6 pr-6 md:p-6 space-y-4 border-r-4 border-t-4 mr-2 border-buttonColor'>
                    <h1 className='text-5xl font-fira'>Our Restaurant</h1>
                    <p className='text-right'> Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec
                        nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed
                        facilisis varius hendrerit accumsan tortor. Donec nisi est mattis
                        mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius
                        hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci
                        maecenas duis. Eleifend facilisis sed facilisis varius hendrerit
                        accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas
                        duis.</p>
                </div>
                <div className='flex flex-col justify-start items-start p-6 space-y-4 border-l-4 border-b-4 border-buttonColor'>
                    <h1 className='text-5xl font-fira'>Meet & Greet</h1>
                    <p className='text-left'>Lorem ipsum dolor sit amet consectetur. Sed amet nibh
                        ante ultrices adipiscing euismod enim diam imperdiet.
                        Tellus justo proin sed orci et turpis diam libero. Eleifend
                        facilisis sed facilisis varius hendrerit accumsan tortor. Donec
                        nisi est mattis mauris morbi orci maecenas duis. Eleifend
                        facilisis sed facilisis varius hendrerit accumsan tortor. Donec
                        nisi est mattis mauris morbi orci maecenas duis</p>
                </div>
                <div className='row-span-2 md:row-auto'>
                    <img src={tables2} alt="tables2" className='w-[99%] h-full' />
                </div>
            </section>
        </>
    )
}