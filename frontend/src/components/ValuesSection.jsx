import React from 'react'

const ValuesSection = () => {

        const values = [
        {
          icon: "excellence",
          title: "Commitment to excellence",
          desc: "We only deliver what we feel is the most effective solution for your needs.",
        },
        {
          icon: "innovation",
          title: "Innovation and learning",
          desc: "Finding the best ways to learn and develop the tools to your success.",
        },
        {
          icon: "integrity",
          title: "Integrity and transparency",
          desc: "We understand the importance of giving you a clear view of the implementation process.",
        },
        {
          icon: "customer",
          title: "Customer-centricity",
          desc: "Keeping customer needs as the core outcomes of our internal processes.",
        },
        {
          icon: "growth",
          title: "Collaborative growth",
          desc: "We heavily imbibe 'your step-ups are our step-ups' in our relationships, both internally and externally.",
        },
        {
          icon: "ethics",
          title: "Ethics above all",
          desc: "We conduct business with integrity, adhering to ethics, honesty, and legal compliance for a brighter future.",
        },
      ];

      const ICONS = {
        excellence:
          "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        innovation:
          "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z",
        integrity:
          "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
        customer:
          "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
        growth:
          "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z",
        ethics:
          "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
      };



  return (
    <>

      <div className="bg-[#0d0b1e] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            OUR VALUES
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Purpose-built modules that address every dimension of A&D
            operations — from a single, integrated platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#130f2a] shadow-md/25 shadow-brand-gold border border-purple-800/30 rounded-2xl p-6 hover:scale-110 hover:border-[#f5a623]/40 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center mb-4 group-hover:bg-[#f5a623]/20  transition-colors">
                <svg
                  className="text-[#f5a623]"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={ICONS[value.icon]} />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-sm mb-2">
                {value.title}
              </h3>

              <p className="text-gray-400 text-xs leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
    
    </>
  )
}

export default ValuesSection