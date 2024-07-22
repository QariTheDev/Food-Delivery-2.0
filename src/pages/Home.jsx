import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from './About'
import Category from '../components/Category/Category'
import Stripe from '../components/Stripe/Stripe'
import Chef from '../components/Cards/Chef'
import Showcase from '../components/Showcase/Showcase'
import Services from '../components/Stripe/Services'
import Footer from '../components/Footer/Footer'
import CartButton from '../components/CartButton/CartButton'

export default function home() {
    return (
        <>
            <Navbar />

            <Hero />
            <About />
            <Category />
            <Stripe />
            <Chef />
            <Showcase />
            <Services />

            <CartButton />

            <Footer />
        </>
    )
}
