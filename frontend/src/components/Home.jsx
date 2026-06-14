import React from 'react'
import { industrymeet , conference } from '../assets/images'

const Home = () => {
  return (
    <>
        <div className="bg-brand-dark relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20"  
        >
         
         <div
              className="absolute inset-0 bg-cover bg-center hidden md:block"
              style={{
                backgroundImage: `url(${industrymeet})`,
              }}
          ></div>

  {/* Gradient Overlay */}
  <div className=" absolute inset-0 bg-linear-to-r from-brand-dark/100 via-brand-purple-mid/90 to-transparent  "></div>
      
      <div className='relative z-10 p-10'>

              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">
          Our Journey
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#f5a623] mb-6">
          Highshine IT Solutions
        </h2>
        <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed mb-5">
          Traditionally, many organizations have approached ERP implementation as just another
          project, where service providers focus mainly on completing the setup and moving on. But
          in reality, ERP is far more than a system installation. It has the potential to reshape
          how a business operates, how teams collaborate, and how decisions are made.
        </p>
        
        
        
        <button 
        className="   bg-[#f5a623] hover:bg-[#e09518] text-[#0d0b1e] font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(245,166,35,0.4)] hover:scale-105 ">
          Schedule a free consultation →
        </button>
        
        
        </div>  
        
      </div>
    
    </>
  )
}

export default Home