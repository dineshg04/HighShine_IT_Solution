import React from 'react'

const Timeline = () => {
        const milestones = [
  { year: "2022", label: "Company Started", employees: "5 employees", active: false },
  { year: "2023", label: "Team Expansion", employees: "15 employees", active: false },
  { year: "2024", label: "Growth Phase", employees: "22 employees", active: false },
  { year: "2025", label: "Scaling Operations", employees: "34 employees", active: false },
  { year: "2026", label: "Future Vision", employees: "45+ employees", active: true },
];

  return (
    <>
    
    <div className="bg-linear-to-r from-brand-dark/100 via-brand-purple-mid/90 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#f5a623] text-xs font-bold tracking-widest uppercase mb-3">
          Milestones
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16">
          Our Growth Journey
        </h2>

        {/* Timeline */}
<div className="relative ml-28 md:ml-0">
  {/* Desktop Horizontal Line */}
  <div className="hidden md:block absolute top-4 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-800 via-[#f5a623] to-purple-800" />

  {/* Mobile Vertical Line */}
  <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-800 via-[#f5a623] to-purple-800" />

  <div className="grid md:grid-cols-5 gap-8 md:gap-6">
    {milestones.map((m, i) => (
      <div
        key={i}
        className="flex md:flex-col items-start md:items-center relative"
      >
        {/* Dot */}
        <div
          className={`   w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 shrink-0 md:mb-4 transition-all hover:border-8 ${
            m.active
              ? "bg-[#f5a623]  border-[#f5a623] shadow-[0_0_14px_rgba(245,166,35,0.6)]"
              : "bg-[#1e1640] border-purple-600"
          }`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              m.active ? "bg-white" : "bg-purple-400"
            }`}
          />
        </div>

        {/* Content */}
        <div className="ml-4 md:ml-0 md:text-center ">
          <p
            className={`text-lg font-bold mb-1 ${
              m.active ? "text-[#f5a623]" : "text-white"
            }`}
          >
            {m.year}
          </p>

          <p className="text-xs text-gray-400 font-medium">
            {m.label}
          </p>

          <p className="text-xs text-gray-500 mt-0.5">
            {m.employees}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default Timeline