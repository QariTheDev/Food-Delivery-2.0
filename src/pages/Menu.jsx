import React, { useState } from 'react';
import SideNavbar from '../components/Navbar/SideNavbar';
import chickenMeal from '../assets/img/close-up-delicious-chicken-meal 1.png';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import defaultPic from '../assets/img/close-up-delicious-taco-plate.jpg';
import prBanner from '../assets/img/pr banner.png';
import { useNavigate } from 'react-router';
import CartButton from '../components/CartButton/CartButton';

export default function Menu() {
    const [activeMenu, setActiveMenu] = useState('STARTER');
    const [priceRange, setPriceRange] = useState([0, 40]);
    const navigate = useNavigate();

    const handlePriceChange = (e) => {
        setPriceRange([0, parseFloat(e.target.value)]);
    };    

    const handleProductDetail = (dish, filteredMenu) => {    
        navigate(`/product/${dish.name}`, { state: { dish, filteredMenu } });
    };    

    const menu = {
        STARTER: [
            {
                name: 'Chicken Satay',
                price: 12.99,
                description: 'Chicken Satay is a delicious alternative to your standard beef or pork satay. The chicken is marinated in a flavorful blend of spices and then grilled to perfection.',
                ingredients: ['Chicken', 'Spices', 'Peanut sauce', 'Skewers'],
                img: defaultPic,
                category: 'Starter'
            },
            {
                name: 'Spring Rolls',
                price: 9.99,
                description: 'Spring Rolls are a popular appetizer in many Asian countries. They are made with a thin wrapper filled with a mixture of vegetables, meat, and sometimes noodles.',
                ingredients: ['Wrapper', 'Vegetables', 'Meat', 'Noodles'],
                img: defaultPic,
                category: 'Starter'
            },
            {
                name: 'Tom Yum Soup',
                price: 8.99,
                description: 'Tom Yum Soup is a spicy and sour soup that is a popular dish in Thailand. It is made with a flavorful broth, shrimp, mushrooms, and a variety of herbs and spices.',
                ingredients: ['Broth', 'Shrimp', 'Mushrooms', 'Herbs'],
                img: defaultPic,
                category: 'Starter'
            }
        ],
        'MAIN COURSE': [
            {
                name: 'Pad Thai',
                price: 15.99,
                description: 'Pad Thai is a popular Thai dish that is made with stir-fried rice noodles, eggs, tofu, shrimp, or chicken, and a flavorful sauce made from tamarind, fish sauce, and sugar.',
                ingredients: ['Rice noodles', 'Eggs', 'Tofu', 'Shrimp'],
                img: defaultPic,
                category: 'Main Course'
            },
            {
                name: 'Green Curry',
                price: 14.99,
                description: 'Green Curry is a Thai curry that is made with a flavorful blend of green chilies, lemongrass, coconut milk, and fresh herbs.',
                ingredients: ['Green chilies', 'Lemongrass', 'Coconut milk', 'Herbs'],
                img: defaultPic,
                category: 'Main Course'
            },
            {
                name: 'Massaman Curry',
                price: 16.99,
                description: 'Massaman Curry is a Thai curry that is made with a flavorful blend of spices, coconut milk, potatoes, and peanuts. It is a rich and creamy curry that is perfect for a cold winter night.',
                ingredients: ['Spices', 'Coconut milk', 'Potatoes', 'Peanuts'],
                img: defaultPic,
                category: 'Main Course'
            }
        ],
        DESSERTS: [
            {
                name: 'Mango Sticky Rice',
                price: 6.99,
                description: 'Mango Sticky Rice is a popular Thai dessert that is made with sweet sticky rice, ripe mangoes, and coconut milk. It is a simple and delicious dessert that is perfect for a hot summer day.',
                ingredients: ['Sticky rice', 'Mangoes', 'Coconut milk', 'Sugar'],
                img: defaultPic,
                category: 'Dessert'
            },
            {
                name: 'Coconut Ice Cream',
                price: 5.99,
                description: 'Coconut Ice Cream is a popular dessert in Thailand that is made with coconut milk, sugar, and a variety of toppings such as peanuts, corn, and sweet sticky rice.',
                ingredients: ['Coconut milk', 'Sugar', 'Peanuts', 'Corn'],
                img: defaultPic,
                category: 'Dessert'
            },
            {
                name: 'Thai Tea',
                price: 3.99,
                description: 'Thai Tea is a popular drink in Thailand that is made with black tea, sugar, and milk. It is a sweet and creamy drink that is perfect for a hot summer day.',
                ingredients: ['Black tea', 'Sugar', 'Milk', 'Ice'],
                img: defaultPic,
                category: 'Dessert'
            }
        ],
        DRINKS: [
            {
                name: 'Thai Iced Coffee',
                price: 4.99,
                description: 'Thai Iced Coffee is a popular drink in Thailand that is made with strong coffee, sugar, and milk. It is a sweet and creamy drink that is perfect for a hot summer day.',
                ingredients: ['Coffee', 'Sugar', 'Milk', 'Ice'],
                img: defaultPic,
                category: 'Drink'
            },
            {
                name: 'Thai Iced Tea',
                price: 3.99,
                description: 'Thai Iced Tea is a popular drink in Thailand that is made with black tea, sugar, and milk. It is a sweet and creamy drink that is perfect for a hot summer day.',
                ingredients: ['Black tea', 'Sugar', 'Milk', 'Ice'],
                img: defaultPic,
                category: 'Drink'
            },
            {
                name: 'Coconut Water',
                price: 2.99,
                description: 'Coconut Water is a refreshing drink that is made from the clear liquid inside young coconuts. It is a natural source of electrolytes and is perfect for rehydrating after a workout.',
                ingredients: ['Coconut water', 'Electrolytes'],
                img: defaultPic,
                category: 'Drink'
            }
        ]
    };    

    const handleMenuClick = (menuItem) => {
        setActiveMenu(menuItem);
    };

    const filteredMenu = menu[activeMenu].filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

    return (
        <>
            <Navbar />

            <section className='relative h-screen overflow-hidden'>
                <div className="absolute inset-0 bg-cover bg-center object-cover" style={{ backgroundImage: `url(${chickenMeal})` }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className='font-fira text-3xl md:text-7xl font-bold'>Menu</h1>
                </div>

                <div className="absolute top-0 right-0 bottom-0 flex items-center justify-end p-4">
                    <SideNavbar />
                </div>
            </section>

            <section className='flex flex-col items-center justify-center p-4 md:p-16'>
                <div className="flex items-center justify-center space-x-4 md:space-x-9 text-xl md:text-3xl mb-4 md:mb-8">
                    {Object.keys(menu).map((item) => (
                        <h1
                            key={item}
                            className={`cursor-pointer ${activeMenu === item ? 'text-black border-b-2 border-black' : 'text-slate-500'}`}
                            onClick={() => handleMenuClick(item)}
                        >
                            {item}
                        </h1>
                    ))}
                </div>

                <div className='flex flex-col items-center justify-center mb-4 md:mb-8'>
                    <label htmlFor="priceRange" className='text-lg font-bold mb-2 md:mb-4'>Filter by Price: Up to ${priceRange[1]}</label>
                    <input
                        id="priceRange"
                        type="range"
                        min="0"
                        max="40"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className='w-full md:w-1/2'
                    />
                </div>
            </section>

            <section className='px-4 md:px-16'>
                <div className='flex flex-col gap-4 md:gap-8'>
                    {filteredMenu.map((dish, index) => (
                        <div key={index} onClick={() => handleProductDetail(dish, filteredMenu)} className='cursor-pointer flex flex-col md:flex-row items-center justify-between bg-white p-4 md:p-10 space-y-4 md:space-y-0 md:space-x-5 rounded-lg shadow-md font-montserrat'>
                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-6">
                                <img src={dish.img} alt="dish" className='w-24 h-24 md:w-36 md:h-36 object-cover' />
                                <div className="flex flex-col items-start justify-center text-center md:text-left">
                                    <h2 className='font-bold text-xl md:text-2xl mb-2'>{dish.name}</h2>
                                    <div className='flex flex-wrap list-none space-x-2 text-sm md:text-base text-slate-500'>
                                        {dish.ingredients.map((ingredient, idx) => (
                                            <li key={idx}>{ingredient + (idx === dish.ingredients.length - 1 ? null : ',')}</li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className='text-lg md:text-xl text-gray-600'>{`$${dish.price.toFixed(2)}`}</p>
                        </div>
                    ))}
                </div>
            </section>

            <img src={prBanner} alt="prBanner" className='my-10 md:my-20 w-full'/>

            <CartButton />

            <Footer />
        </>
    );
}