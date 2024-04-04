import React from 'react'

const Banner = () => {
  return (
    <div className="relative text-white overflow-hidden">
        {/* Banner Background */}
        <div className="absolute inset-0">
            <div className="banner" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Banner Content */}
        <div className="relative mx-auto max-w-7xl pt-20 px-6 lg:px-8 pb-20">
            {/* Banner Title */}
            <h1 className="text-3xl leading-tight mb-4">
                Order bundle to get
            </h1>
            {/* Banner Sub Title */}
            <p className="text-5xl font-bold text-[#796357] my-8">
              20% off  
            </p>
             {/* Banner Button */}
            <button 
              className="fill_button px-8 py-3 md:py-4 md:text-lg md:px-10"
              onClick={() => {
                const Products = document.getElementById('Products')
                Products.scrollIntoView({behavior: 'smooth'});
              }}
            >
              View Cupcakes
            </button>
        </div>
    </div>
  )
}

export default Banner