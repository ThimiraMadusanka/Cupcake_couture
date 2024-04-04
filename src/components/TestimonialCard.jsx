
const TestimonialCard = ({ testimonial, customerImg, customerName, customerDesignation }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-[#796357] md:px-14 rounded-2xl md:py-14">
        {/* Testimonial Text */}
        <p className="text-md text-white">{testimonial}</p>
        {/* Person Details Section */}
        <div className="flex items-center mt-8 space-x-3">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <img 
                    alt="Avatar" 
                    src={customerImg}
                />
            </div>
            <div>
                <div className="text-lg font-medium text-white">{customerName}</div>
                <div className="text-gray-300">{customerDesignation}</div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard