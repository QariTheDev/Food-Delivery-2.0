import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../components/Navbar/Navbar';
import SideNavbar from '../components/Navbar/SideNavbar';
import chickenMeal from '../assets/img/close-up-delicious-chicken-meal 1.png';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router';

export default function Checkout() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const navigate = useNavigate();
    const tax = (totalAmount * 0.1).toFixed(2);
    const discount = 0;

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        area: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        area: Yup.string().required('Required')
    });

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            setSubmitting(false);
            alert('Order placed successfully!');
            navigate('/');
        }, 400);
    };

    return (
        <>
            <Navbar />

            <section className='relative h-screen overflow-hidden'>
                <div className="absolute inset-0 bg-cover bg-center object-cover" style={{ backgroundImage: `url(${chickenMeal})` }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className='font-fira text-3xl md:text-7xl font-bold'>Check Out</h1>
                </div>

                <div className="absolute top-0 right-0 bottom-0 flex items-center justify-end p-4">
                    <SideNavbar />
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 px-4 md:px-16 py-8 md:py-16 font-montserrat">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-4">
                            <div className="flex flex-col space-y-4">
                                <label className="flex flex-col space-y-4">
                                    First Name
                                    <Field type="text" name="firstName" className="border border-slate-500 rounded px-4 py-2" />
                                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                                </label>
                                <label className="flex flex-col space-y-4">
                                    Email
                                    <Field type="email" name="email" className="border border-slate-500 rounded px-4 py-2" />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </label>
                                <label className="flex flex-col space-y-4">
                                    Address
                                    <Field type="text" name="address" className="border border-slate-500 rounded px-4 py-2" />
                                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                                </label>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <label className="flex flex-col space-y-4">
                                    Last Name
                                    <Field type="text" name="lastName" className="border border-slate-500 rounded px-4 py-2" />
                                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                                </label>
                                <label className="flex flex-col space-y-4">
                                    Phone
                                    <Field type="text" name="phone" className="border border-slate-500 rounded px-4 py-2" />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                </label>
                                <label className="flex flex-col space-y-4">
                                    Area
                                    <Field as="select" name="area" className="border border-slate-500 rounded px-4 py-2">
                                        <option value="">Select Area</option>
                                        <option value="Area 1">Area 1</option>
                                        <option value="Area 2">Area 2</option>
                                    </Field>
                                    <ErrorMessage name="area" component="div" className="text-red-500 text-sm" />
                                </label>
                            </div>
                            <div className="col-span-2">
                                <button type="submit" className="bg-buttonColor text-white px-4 py-2 rounded-md hover:bg-buttonHoverColor transition-all ease-in-out duration-300" disabled={isSubmitting}>
                                    Checkout
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="col-span-1 border border-slate-500 mt-10 lg:mt-0">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border-b border-slate-500 px-4 py-2">
                            <img src={item.img} alt="item img" className='w-20 h-20 object-cover rounded' />
                            <div className="flex flex-col space-y-2">
                                <p>{item.name}</p>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p>{item.quantity}</p>
                        </div>
                    ))}

                    <div className="flex flex-col py-2 px-4 space-y-4">
                        <h1 className="text-base flex justify-between w-full">Sub-total <span><strong>${totalAmount.toFixed(2)}</strong></span></h1>
                        <h1 className="text-base flex justify-between w-full">Shipping <span><strong>Free</strong></span></h1>
                        <h1 className="text-base flex justify-between w-full">Discount <span><strong>${discount}</strong></span></h1>
                        <h1 className="text-base flex justify-between w-full pb-4 border-b border-slate-500">Tax <span><strong>${tax}</strong></span></h1>
                        <h1 className="text-base flex justify-between w-full">Total <span><strong>${(totalAmount + parseFloat(tax) - discount).toFixed(2)}</strong></span></h1>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}