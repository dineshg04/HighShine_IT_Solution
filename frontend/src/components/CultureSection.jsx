import React from 'react'
import { groupphoto } from '../assets/images'
const CultureSection = () => {
  return (
    <>
        <section className="bg-[#0d0b1e] py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
            Leadership & Culture
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4">The Leadership</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            Highshine is a labor of love for the founders, and we envision building it more like a
            family than an organization. To the leadership, the welfare of employees is of utmost
            importance.
          </p>

          <h3 className="text-2xl font-extrabold text-white mb-4">Cultivating Growth</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            At Highshine, we believe that a team creates exceptional results for clients. We've
            built an employee-first culture where every voice matters and ideas shape our policies.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Our commitment to learning and development ensures that our team stays ahead of industry
            trends, equipped with the latest skills and knowledge to serve you better.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            From collaborative workspaces to continuous training programs, we invest in our people
            because we know their growth is your success.
          </p>
        </div>
        <div>
          <img
          src={groupphoto}
          className='rounded-4xl'
          />
        </div>
      </div>
    </section>
    
    
    </>
  )
}

export default CultureSection