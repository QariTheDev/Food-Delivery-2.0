import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

export default function CartButton() {
    return (
        <button className="fixed bottom-0 right-2 z-50 bg-buttonColor hover:bg-buttonHoverColor text-white px-4 py-2 rounded-lg drop-shadow-lg">
            <Link to='/cart'>
                <FaShoppingCart className='text-base cursor-pointer' />
            </Link>
        </button>
    )
}