import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-16" id="Testimonial">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Name */}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl font-bold text-[#796357]">
                    Here&#x27;s what our customers said
                </h2>
                <p className="text-gray-500 py-4 text-center w-9/12">
                    Discover the experiences of our delighted customers in their own words, and see how our cupcakes have added a 
                    touch of sweetness to their special moments.
                </p>
            </div>
            {/* Testimonial Section */}
            <div className="container p-6 mx-auto xl:px-0">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    <TestimonialCard 
                        testimonial="Cupcake was beyond words! Each bite melted in my mouth with a perfect blend of sweetness and richness."
                        customerImg="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"
                        customerName="Sarah Steiner"
                        customerDesignation="Founder of Beta Inc."
                    />
                    <TestimonialCard 
                        testimonial="I ordered a dozen mixed cupcakes for company event, and they were a hit!"
                        customerImg="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
                        customerName="Dylan Ambrose"
                        customerDesignation="Vp of AIA"
                    />
                    <TestimonialCard 
                        testimonial="The lemon zest cupcakes were a refreshing surprise! Light, fluffy, and just the right amount of tanginess."
                        customerImg="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80"
                        customerName="Gabrielle Winn"
                        customerDesignation="Co-founder of Acme Inc."
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial