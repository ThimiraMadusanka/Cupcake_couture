import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div className="hero" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        {/* Hero Title */}
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Cupcake Couture</h1>
        {/* Hero Sub Title */}
        <p className="text-md text-gray-300 mb-8">
          Sri Lanka's most delicious cupcake for birthdays, weddings or meetings. Our cupcakes are baked daily using the finest ingredinets.
        </p>
        {/* Hero Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            className="fill_button w-full px-8 py-3 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              const Products = document.getElementById('Products')
              Products.scrollIntoView({behavior: 'smooth'});
            }}
          >
            View Cupcakes
          </button>
          <button 
            className="border_button w-full px-8 py-3 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              const ContactUs = document.getElementById('ContactUs')
              ContactUs.scrollIntoView({behavior: 'smooth'});
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero