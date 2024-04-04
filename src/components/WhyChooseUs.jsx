import WhyChooseUsCard from './WhyChooseUsCard'

import { TbTruckDelivery } from "react-icons/tb";
import { GiCupcake } from "react-icons/gi";
import { LuBadgeCheck } from "react-icons/lu";

const WhyChooseUs = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-16" id='WhyChooseUs'>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Name */}
            <h2 className="text-center text-4xl font-bold text-[#796357]">
                Why Choose Us?
            </h2>
            {/* Why Choose Us Cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {/* Feature 1 */}
                <WhyChooseUsCard 
                    icon={<TbTruckDelivery size={30} color="#796357" />}
                    cardTitle="Fast Delivery"
                    cardDescription="We'll bring your cupcakes to your door, anywhere."
                />
                {/* Feature 2 */}
                <WhyChooseUsCard 
                    icon={<GiCupcake size={25} color="#796357" />}
                    cardTitle="Customization Options"
                    cardDescription="Customize your cupcakes, from flavors and fillings."
                />
                {/* Feature 3 */}
                <WhyChooseUsCard 
                    icon={<LuBadgeCheck size={30} color="#796357" />}
                    cardTitle="Quality Products"
                    cardDescription="We bake cupcakes with finest ingredinets."
                />
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs