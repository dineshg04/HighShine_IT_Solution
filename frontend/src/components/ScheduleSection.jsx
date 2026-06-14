import React from 'react'
import { trackCtaClick } from "../services/analytics";
import { logVisitor , getCountryName } from '../api/axiosapi';


const ScheduleSection = () => {

  const handleCtaClick = () => {
    // ── 1. Fire GA4 cta_click event (this is the Conversion Goal) ────────────
    trackCtaClick({
      label:    "schedule_consultation",
      location: "cta_section",
    });

     logVisitor({
      page:     "/cta-click",
      referrer: document.referrer || "direct",
      country:  getCountryName(),
    });

   window.location.href = "/"; 
  };
  return (
    <>
        <div className="bg-brand-dark py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          Empower your digital transformation today
        </h2>
        <button 
        onClick={handleCtaClick}
        className="bg-[#f5a623] hover:bg-[#e09518] text-[#0d0b1e] font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(245,166,35,0.4)] hover:scale-105 ">
          Schedule a free consultation →
        </button>
      </div>
    </div>
    
    
    </>
  )
}

export default ScheduleSection