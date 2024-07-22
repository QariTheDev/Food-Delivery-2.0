import React from 'react';
import CartButton from '../components/CartButton/CartButton';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">Contact Us</h1>
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 text-lg font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-lg font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-lg font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        className="p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all ease-in-out duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <CartButton />
        </div>
    );
}