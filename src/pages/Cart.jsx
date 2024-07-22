import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/features/cartSlice';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SideNavbar from '../components/Navbar/SideNavbar';
import chickenMeal from '../assets/img/close-up-delicious-chicken-meal 1.png';
import { LiaStarSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const dispatch = useDispatch();

    const deliveryCharges = 0;
    const totalAmountWithDelivery = totalAmount + deliveryCharges;

    return (
        <>
            <Navbar />

            <section className='relative h-screen overflow-hidden'>
                <div className="absolute inset-0 bg-cover bg-center object-cover" style={{ backgroundImage: `url(${chickenMeal})` }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className='font-fira text-3xl md:text-7xl font-bold'>Cart Items</h1>
                </div>

                <div className="absolute top-0 right-0 bottom-0 flex items-center justify-end p-4">
                    <SideNavbar />
                </div>
            </section>

            <section className="relative z-10 p-4 md:p-10 bg-white">
                <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200 border-b border-gray-300">
                                    <th className="px-2 md:px-6 py-3 text-left text-gray-600">Image</th>
                                    <th className="px-2 md:px-6 py-3 text-left text-gray-600">Name</th>
                                    <th className="px-2 md:px-6 py-3 text-left text-gray-600">Price</th>
                                    <th className="px-2 md:px-6 py-3 text-left text-gray-600">Quantity</th>
                                    <th className="px-2 md:px-6 py-3 text-left text-gray-600">Total</th>
                                    <th className="px-2 md:px-6 py-3 text-left text-gray-600">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-200 font-montserrat">
                                        <td className="px-2 md:px-6 py-4"><img src={item.img} alt="item img" className='w-16 h-16 md:w-20 md:h-20 object-cover rounded' /></td>
                                        <td className="px-2 md:px-6 py-4 flex flex-col space-y-2 md:space-y-5">{item.name}
                                            <div className='flex space-x-1 md:space-x-2'>
                                                <LiaStarSolid className='text-orange-500' />
                                                <LiaStarSolid className='text-orange-500' />
                                                <LiaStarSolid className='text-orange-500' />
                                                <LiaStarSolid className='text-slate-500' />
                                                <LiaStarSolid className='text-slate-500' />
                                            </div>
                                        </td>
                                        <td className="px-2 md:px-6 py-4">${item.price.toFixed(2)}</td>
                                        <td className="px-2 md:px-6 py-4">{item.quantity}</td>
                                        <td className="px-2 md:px-6 py-4">${(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="px-2 md:px-6 py-4">
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.name))}
                                                className="bg-red-500 text-white px-2 md:px-3 py-1 rounded-md"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-28 gap-10">
                            <div className="flex flex-col">
                                <h1 className="text-2xl">Coupon Code</h1>
                                <div className="flex items-center mt-4 font-montserrat">
                                    <input type="text" placeholder="Enter Code Here" className="px-4 md:px-7 py-2 md:py-5 border border-slate-600 bg-white rounded-l-lg text-black w-full md:w-96" />
                                    <button className="bg-buttonColor text-white px-4 md:px-8 py-2 md:py-5 rounded-r-lg flex items-center justify-center">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-2xl">Total Price</h1>
                                <div className="flex flex-col space-y-3 mt-4 font-montserrat border border-black p-3">
                                    <h1 className="text-lg md:text-xl flex justify-between w-full">Cart Subtotal <span><strong>${totalAmount.toFixed(2)}</strong></span></h1>
                                    <h1 className="text-lg md:text-xl flex justify-between border-b pb-4 w-full border-slate-900">Shipping Charge <span><strong>${deliveryCharges.toFixed(2)}</strong></span></h1>
                                    <h1 className="text-lg md:text-xl flex justify-between w-full">Total Amount <span><strong>${totalAmountWithDelivery.toFixed(2)}</strong></span></h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link to={'/checkout'}>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-full flex items-center">
                                    <FaPaperPlane className="mr-2" />
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}