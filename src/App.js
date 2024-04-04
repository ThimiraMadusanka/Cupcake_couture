import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div>
      {/* Nav Bar Component */}
      <NavBar />
      {/* Hero Component */}
      <Hero />
      {/* Why Choose Us Component */}
      <WhyChooseUs />
      {/* Products Component */}
      <Products />
      {/* Testimonial Component */}
      <Testimonial />
      {/* Banner Component */}
      <Banner />
      {/* Contact Us omponent */}
      <ContactUs />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
