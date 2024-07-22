import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import img1 from '../../assets/img/unsplash_PxJ9zkM2wdA.png';
import img2 from '../../assets/img/unsplash_q54Oxq44MZs.png';
import img3 from '../../assets/img/unsplash__79ZJS8pV70.png';
import img4 from '../../assets/img/close-up-delicious-taco-plate.jpg';
import img5 from '../../assets/img/unsplash_jpkfc5_d-DI@2x.png';
import img6 from '../../assets/img/unsplash_W10_NCsLVyc.png';

export default function Footer() {
    return (<>
        <footer>
            <footer className="text-black pt-10 font-montserrat">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 bg-footerUpper px-6 md:pl-56 md:pr-28 md:py-14">
                    <div className='flex flex-col'>
                        <h3 className="text-xl font-semibold mb-4 font-fira">LOGO</h3>
                        <p className="mb-2">Lorem ipsum dolor sit amet</p>
                        <div className="flex items-center mt-4">
                            <input type="text" placeholder="Enter Your Email" className="px-4 py-2 bg-white rounded-l-lg text-black w-48" />
                            <button className="bg-buttonColor text-white px-4 py-3 rounded-r-lg flex items-center justify-center">
                                <FaPaperPlane size={16} />
                            </button>
                        </div>
                    </div>
                    <div className='text-sm'>
                        <h3 className="text-xl font-semibold mb-4 font-fira">Contact Us</h3>
                        <div className="flex items-center mb-3">
                            <FaMapMarkerAlt className="text-buttonColor mr-3" />
                            <p>25950 Long Lane, North Ismael 14280</p>
                        </div>
                        <div className="flex items-center mb-3">
                            <FaPhoneAlt className="text-buttonColor mr-3" />
                            <p>00965 96659986</p>
                        </div>
                        <div className="flex items-center mb-3">
                            <FaEnvelope className="text-buttonColor mr-3" />
                            <p>Jermaine.Connelly@yahoo.com</p>
                        </div>
                        <div className="flex items-center">
                            <FaClock className="text-buttonColor mr-3" />
                            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 font-fira">Links</h3>
                        <ul className="font-montserrat text-sm">
                            <li className="mb-2"><a href="#">About Us</a></li>
                            <li className="mb-2"><a href="#">Contact Us</a></li>
                            <li className="mb-2"><a href="#">Our Menu</a></li>
                            <li className="mb-2"><a href="#">Team</a></li>
                            <li className="mb-2"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 font-fira">Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="relative aspect-w-1 aspect-h-1">
                                <img src={img1} alt="Image 1" className="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div className="relative aspect-w-1 aspect-h-1">
                                <img src={img2} alt="Image 2" className="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div className="relative aspect-w-1 aspect-h-1">
                                <img src={img3} alt="Image 3" className="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div className="relative aspect-w-1 aspect-h-1">
                                <img src={img4} alt="Image 4" className="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div className="relative aspect-w-1 aspect-h-1">
                                <img src={img5} alt="Image 5" className="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div className="relative aspect-w-1 aspect-h-1">
                                <img src={img6} alt="Image 6" className="object-cover w-full h-full rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center flex justify-between items-center md:pl-56 md:pr-28 py-3 bg-buttonColor text-white font-fira">
                <p>Copyright © 2000-{new Date().getFullYear()} .logo.com. All rights reserved</p>
                <div className='flex space-x-12'>
                    <p>Privacy Policy</p>
                    <p>Term Of Use</p>
                    <p>Partner</p>
                </div>
            </div>
        </footer>
    </>
    );
}