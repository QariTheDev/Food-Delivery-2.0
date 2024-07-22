import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { IoInformationCircle } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Navigate } from 'react-router-dom';

export default function Navbar() {
    const loc = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => {
        return loc.pathname === path ? 'text-primary dark:text-primaryDark' : 'text-gray-900 dark:text-GrayText';
    };

    const handleBookNow = () => {
        navigate('/contact');
    }

    const NavbarLinks = {
        home: {
            name: 'Home',
            icon: <IoMdHome className='text-white text-3xl' />,
            anchor: '/',
        },
        menu: {
            name: 'Menu',
            icon: <MdOutlineRestaurantMenu className='text-white text-3xl' />,
            anchor: '/menu',
        },
        franchise: {
            name: 'Franchise',
            icon: <FcCollaboration className='text-white text-3xl' />,
            anchor: '/franchise',
        },
        about: {
            name: 'About',
            icon: <IoInformationCircle className='text-white text-3xl' />,
            anchor: '/about',
        },
        contact: {
            name: 'Contact Us',
            icon: <FaPhoneAlt className='text-white text-3xl' />,
            anchor: '/contact',
        },
    };

    function FirstCapital(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    return (
        <nav className='absolute inset-0 flex justify-end items-center pr-10 z-50'>
            <ul className='flex flex-col justify-center items-center bg-transBlackNavbar p-2 rounded-md space-y-7'>
                <div>
                    {
                        Object.keys(NavbarLinks).map((key, index) => (
                            <li key={index} className='mb-5 space-y-6'>
                                <Link
                                    to={NavbarLinks[key].anchor}
                                    className={`flex flex-col items-center gap-x-3 ${isActive(NavbarLinks[key].anchor)}`}
                                >
                                    {NavbarLinks[key].icon}
                                    <span className='font-semibold text-white'>{FirstCapital(NavbarLinks[key].name)}</span>
                                </Link>
                            </li>
                        ))
                    }
                </div>

                <button onClick={handleBookNow} className="text-base rounded-xl text-white bg-buttonColor py-3 px-5">Book Now</button>
            </ul>
        </nav>
    );
}
