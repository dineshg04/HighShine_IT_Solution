import React from 'react'
import { industry , industrymeet } from '../assets/images'

const IndustrygapSection = () => {
  return (
    <>
         <section className="bg-[#100e25] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
            The Problem
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-6">The Industry Gap</h2>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            While most ERP providers emphasize the implementation as the final step, we see the real
            work beginning after that. When a business starts using the software day-to-day, that's
            when the transformation truly unfolds.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            This is the moment Highshine steps in as a committed partner, ensuring that our clients
            realize the full value of their ERP investment.
          </p>

          <blockquote className="bg-[#1a1640] border border-brand-gold/25 rounded-xl px-6 py-4 shadow-xl/15 shadow-amber-500">
            <p className="text-[#f5a623] italic text-sm font-medium ">
              "The real transformation begins after go-live."
            </p>
          </blockquote>
        </div>

        {/* Illustration */}
        <div className="  ">
          <img src={industry}  className='w-full rounded-4xl' />
         
        </div>
      </div>
    </section>
    
    </>
  )
}

export default IndustrygapSection