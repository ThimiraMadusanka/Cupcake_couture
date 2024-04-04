import white_logo from "../assets/images/logo-white.png"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#796357]">
      <div className="mx-auto max-w-7xl py-8 px-6 lg:py-10 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex gap-2 justify-center items-center pb-3">
          <img
            src={white_logo}
            alt="Logo"
            width={30}
            height={30}
          />
          <p className="font-semibold text-xl tracking-wide italic text-white">Cupcake Couture</p>
        </div>
        <p className="text-base text-white text-center">© 2024 Cupcake Couture, Inc. All rights reserved.</p>
        {/* Social Media Icons */}
        <ul className="flex justify-center mt-5 space-x-5">
          <li>
            <FaFacebook className="text-white hover:text-[#CCB59D]" size={20} />
          </li>
          <li>
            <FaInstagram className="text-white hover:text-[#CCB59D]" size={20} />
          </li>
          <li>
            <FaTwitter className="text-white hover:text-[#CCB59D]" size={20} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer