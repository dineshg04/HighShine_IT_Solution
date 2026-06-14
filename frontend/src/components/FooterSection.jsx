import React from 'react'
import {
  Phone,
  MapPinned,

} from "lucide-react";
import logo from '../assets/logo.jpg'
import linkedinlogo from '../assets/linkedinlogo.png'
import instalogo from '../assets/instalogo.jpg'
import maillogo from '../assets/maillogo.png'

const FooterSection = () => {
  return (
    <>
             <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src={logo} alt='logo' className='rounded-sm' />
              </div>

              <div>
                <h2 className="text-2xl font-bold ">
                  Highshine IT
                </h2>
                <h2 className="text-2xl font-bold ">
                  Solutions
                </h2>
              </div>
            </div>

            <p className="mt-4 text-lg">
              Redefining Business Realities with ERP Solutions
            </p>

            <div className="flex hover:scale-105 transition  mt-5">
              <button className="bg-white text-black px-4 py-2 font-semibold rounded-l-3xl">
                Contact Us
              </button>

              <button className="bg-brand-gold text-black px-4 py-4  font-bold rounded-r-3xl flex items-center gap-2 ">
                <Phone size={22} />
                +91 98409 84513
              </button>
            </div>

            <div className="mt-4 ml-2 flex w-auto space-x-3">
              <a
                href="#"
                className=""
              >
                <img
                  src={maillogo}
                  className='w-12 rounded-xl'
                />  
              </a>


              <a
                href="#"
                className=""
              >
                <img
                  src={linkedinlogo}
                  className='w-14 '
                />  
              </a>


              <a
                href="#"
                className=""
              >
                <img
                  src={instalogo}
                  className='w-12 rounded-xl'
                />  
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className='pt-14'>
            <h3 className="text-brand-gold text-xl font-semibold mb-4">
              Global Presence
            </h3>

            <div>
              <div className="flex gap-3 items-start">
                <MapPinned
                  className="text-brand-gold mt-1"
                  size={20}
                />

                <div className='mb-5'>
                  <h4 className="text-brand-gold text-lg font-bold">
                    India
                  </h4>

                  <p className="mt-0.5">
                    No: 50, Eswaran Koil Street,
                    <br />
                    Zamin Pallavaram,
                    Chennai 600117.
                  </p>
                </div>
              </div>
            </div>

            

            <div>
              <div className="flex gap-3 items-start">
                <MapPinned
                  className="text-brand-gold mt-1"
                  size={20}
                />

                <div>
                  <h4 className="text-brand-gold text-lg font-bold">
                    USA
                  </h4>

                  <p className="mt-0.5  ">
                    539 W. Commerce St #5263,
                    <br />
                    Dallas, Texas 75208, USA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='pt-16'>
            <h3 className="text-brand-gold text-xl font-semibold mb-5">
              MENU
            </h3>
            <div className='flex gap-32'>
                  <ul className="space-y-3  ">
              {[
                "Home",
                "Industries",
                "IFS",
                "Odoo",
              ].map((item) => (
                <li key={item} className=''>
                  <a
                    href="#"
                    className="hover:text-brand-gold hover:font-bold transition"
                  >
                     {item}
                  </a>
                </li>
              ))}
            </ul>

                <ul className="space-y-3  ">
              {[
                "About Us",
                "Blogs",
                "Careers",
              ].map((item) => (
                <li key={item} className=''>
                  <a
                    href="#"
                    className="hover:text-brand-gold hover:font-bold transition"
                  >
                     {item}
                  </a>
                </li>
              ))}
            </ul>



            </div>
            
          </div>
        </div>
      </div>
    </footer>
    
    
    
    </>
  )
}

export default FooterSection