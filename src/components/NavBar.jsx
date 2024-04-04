import { useState, useEffect } from 'react'

import brown_logo from '../assets/images/logo-brown.png'
import white_logo from '../assets/images/logo-white.png'
import menu_brown from '../assets/icons/menu-brown.png'
import menu_white from '../assets/icons/menu-white.png'

const NavBar = () => {
    const TOP_OFFSET = 50;
    const [isScroll, setIsScroll] = useState(false)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    // Handle Scroll for style changes
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 ${isScroll && "bg-[#FFFAF6]"}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                {/* Company Logo and Name */}
                <a href="/" className="flex gap-2 justify-center items-center p-4" >
                    <img
                        src={isScroll ? brown_logo : white_logo}
                        alt="Logo"
                        width={30}
                        height={30}
                    />
                    <p className={`max-sm:hidden font-semibold text-xl tracking-wide italic ${isScroll ? "text-[#796357]" : "text-white" }`}>Cupcake Couture</p>
                </a>
                {/* Desktop Navigation */}
                <div className="sm:flex hidden p-4">
                    <div className="flex gap-10 justify-center items-center">
                        <button 
                            className={`nav_link ${isScroll ? "text-[#796357]" : "text-white" }`}
                            onClick={() => {
                                const WhyChooseUs = document.getElementById('WhyChooseUs')
                                WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Why Choose Us
                        </button>
                        <button 
                            className={`nav_link ${isScroll ? "text-[#796357]" : "text-white" }`}
                            onClick={() => {
                                const Products = document.getElementById('Products')
                                Products.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Cupcakes
                        </button>
                        <button 
                            className={`nav_link ${isScroll ? "text-[#796357]" : "text-white" }`}
                            onClick={() => {
                                const Testimonial = document.getElementById('Testimonial')
                                Testimonial.scrollIntoView({behavior: 'smooth'});
                            }}   
                        >
                            Testimonial
                        </button>
                        <button 
                            className={`nav_link ${isScroll ? "text-[#796357]" : "text-white" }`}
                            onClick={() => {
                                const ContactUs = document.getElementById('ContactUs')
                                ContactUs.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex relative m-0">
                    <div className="flex">
                        <img
                            src={isScroll ? menu_brown : menu_white }
                            alt="menu"
                            width={37}
                            height={37}
                            onClick={() => setToggleDropdown((prev) => !prev)}
                            className="mr-4"
                        />

                        {toggleDropdown && (
                            <div className="absolute right-0 top-full p-5 rounded-lg bg-[#FFFAF6] w-screen flex flex-col gap-2 justify-center items-center">
                                <button 
                                    className="nav_link text-[#796357]"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById('WhyChooseUs')
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Why Choose Us
                                </button>
                                <button 
                                    className="nav_link text-[#796357]"
                                    onClick={() => {
                                        const Products = document.getElementById('Products')
                                        Products.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Cupcakes
                                </button>
                                <button 
                                    className="nav_link text-[#796357]"
                                    onClick={() => {
                                        const Testimonial = document.getElementById('Testimonial')
                                        Testimonial.scrollIntoView({behavior: 'smooth'});
                                    }}   
                                >
                                    Testimonial
                                </button>
                                <button 
                                    className="nav_link text-[#796357]"
                                    onClick={() => {
                                        const ContactUs = document.getElementById('ContactUs')
                                        ContactUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Contact Us
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar