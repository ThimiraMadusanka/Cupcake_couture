
const ContactUs = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-16" id="ContactUs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Name */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-4xl font-bold text-[#796357]">
            Contact Us
          </h2>
          <p className="text-gray-500 pt-4 text-center w-9/12">
            Have a question or craving a custom creation? Contact us today to discuss your cupcake dreams and let us 
            sweeten your day with our delectable treats!
          </p>
        </div>
        {/* Content Section */}
        <div className="container p-6 mx-auto xl:px-0 my-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Map */}
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6242516535285!2d79.84716077480972!3d6.9354325930645375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592181407fab%3A0xbba6f38a1946224f!2sMalwatta%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1712155326726!5m2!1sen!2slk" 
                    width="100%" 
                    height="480" 
                    title="map"
                  />
                </div>
                {/* Details Section */}
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-bold text-[#796357]">Our Address</h3>
                      <p className="mt-1 text-gray-500">No 123, Malwaththa Road, Colombo 10, Sri Lanka</p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-bold text-[#796357]">Hours</h3>
                      <p className="mt-1 text-gray-500">Monday - Friday: 9am - 9pm</p>
                      <p className="mt-1 text-gray-500">Saturday: 10am - 6pm</p>
                      <p className="mt-1 text-gray-500">Sunday: Closed</p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-bold text-[#796357]">Contact</h3>
                      <p className="mt-1 text-gray-500">Email: info@cupcakecouture.com</p>
                      <p className="mt-1 text-gray-500">Phone: +94 111 456 456</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs