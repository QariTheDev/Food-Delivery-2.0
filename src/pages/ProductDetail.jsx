import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SideNavbar from '../components/Navbar/SideNavbar';
import chickenMeal from '../assets/img/close-up-delicious-chicken-meal 1.png';
import { LiaStarSolid } from 'react-icons/lia';
import Services from '../components/Stripe/Services';
import CartButton from '../components/CartButton/CartButton';

export default function ProductDetail() {
    const location = useLocation();
    const { dish, filteredMenu } = location.state || {};
    const dispatch = useDispatch();

    if (!dish) return <p>Loading...</p>;

    const reviews = dish.reviews || 20;
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        console.log("Dispatching item:", {
            id: dish.id,
            name: dish.name,
            price: dish.price,
            quantity,
            img: dish.img
        });
        dispatch(addToCart({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            quantity,
            img: dish.img
        }));
    };

    return (
        <>
            <Navbar />

            <section className='relative h-screen overflow-hidden'>
                <div className="absolute inset-0 bg-cover bg-center object-cover" style={{ backgroundImage: `url(${chickenMeal})` }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className='font-fira text-3xl md:text-7xl font-bold'>Product Details</h1>
                </div>

                <div className="absolute top-0 right-0 bottom-0 flex items-center justify-end p-4">
                    <SideNavbar />
                </div>
            </section>

            <section className='p-4 md:p-16'>
                <div className='flex flex-col md:flex-row items-center justify-center bg-white p-4 md:p-10 rounded-lg shadow-md font-montserrat'>
                    <img src={dish.img} alt={dish.name} className='w-full md:w-1/2 object-cover rounded-lg' />
                    <div className='flex flex-col items-start justify-center ml-0 md:ml-10 mt-4 md:mt-0 space-y-10'>
                        <h1 className='font-fira text-4xl md:text-6xl font-bold mb-4'>{dish.name}</h1>
                        <p className='text-xl md:text-xl text-gray-700 mb-4'>Category: {dish.category}</p>
                        <p className='text-lg md:text-base text-slate-700 pb-4 border-b border-slate-900'>{dish.description}</p>

                        <p className='text-2xl md:text-3xl font-bold text-gray-700'>{`${dish.price.toFixed(2)}$`}</p>

                        <div className="flex items-center justify-center">
                            <div className="flex border-r border-slate-800 pr-4">
                                {[...Array(5)].map((_, i) => (
                                    <LiaStarSolid key={i} className='text-orange-500 text-2xl' />
                                ))}
                            </div>
                            <p className='text-slate-400 text-lg px-4 border-r border-slate-900'>5.0 Ratings</p>
                            <p className='text-slate-400 text-lg pl-4'>{reviews} reviews</p>
                        </div>
                        <p className="text-xl">Quantity</p>
                        <div className='flex items-center justify-start border-b border-slate-900 pb-6 w-full'>
                            <div className='flex items-center justify-center pr-10'>
                                <button onClick={handleDecrement} className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded">-</button>
                                <span className="mx-4 text-xl">{quantity}</span>
                                <button onClick={handleIncrement} className="px-4 py-2 text-white bg-green-500 hover:bg-green-700 rounded">+</button>
                            </div>
                            <button onClick={handleAddToCart} className="py-3 md:py-5 px-6 md:px-10 rounded-2xl font-sans text-white bg-buttonColor hover:bg-buttonHoverColor transition-all ease-in-out duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-4 md:p-16 space-y-10">
                <div className="flex items-center justify-start space-x-6 text-xl">
                    <h1 className="text-slate-900 border-b py-2 border-slate-500">Description</h1>
                    <h1 className="text-slate-500">Reviews ({reviews})</h1>
                </div>

                <div className='font-montserrat text-slate-500 text-base'>
                    {dish.description}
                </div>

                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl">Key Benefits</h1>

                    <ul className='font-montserrat text-slate-500 text-base list-disc pl-4'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Maecenas ullamcorper et et massa condimentum.</li>
                        <li>Vestibulum et massa vel ipsum imperdiet malesuada id tempus.</li>
                        <li>Mauris eget diam magna, in blandit turpis.</li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start space-y-5">
                    <h1 className="text-3xl text-left">Similar Products</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredMenu.slice(0, 4).map((item, index) => (
                            <div key={index} className='flex flex-col items-center justify-center bg-white rounded-lg shadow-md font-montserrat'>
                                <img src={item.img} alt={item.name} className='w-full h-1/2 object-cover rounded-lg' />
                                <h1 className='font-fira text-2xl font-bold mt-4'>{item.name}</h1>
                                <p className='text-xl text-gray-700 mt-4'>{`${item.price.toFixed(2)}$`}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Services />

            <CartButton />

            <Footer />
        </>
    );
}