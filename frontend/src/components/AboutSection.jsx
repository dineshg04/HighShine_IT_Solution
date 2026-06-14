import React, { useEffect, useRef, useState } from "react";
import { founder, cofounder } from "../assets/images";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#100e25] py-20 px-6 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Founder Cards */}
        <div className="space-y-8">

          {/* Founder */}
          <div
            className={`flex flex-col sm:flex-row transition-all duration-2000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <img
              src={founder}
              alt="Founder"
              className="rounded-2xl h-60 w-full sm:w-auto object-cover"
            />

            <div className="flex flex-col justify-center sm:pl-14 mt-4 sm:mt-0">
              <div className="text-2xl font-bold text-white pb-3">
                MR. Hari Gautham Somasundaram
              </div>
              <div className="text-3xl font-bold text-brand-gold">
                Founder & CEO
              </div>
            </div>
          </div>

          {/* Co-Founder */}
          <div
            className={`flex flex-col sm:flex-row transition-all duration-2000 delay-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <img
              src={cofounder}
              alt="Co-Founder"
              className="rounded-2xl h-60 w-full sm:w-auto object-cover"
            />

            <div className="flex flex-col justify-center sm:pl-14 mt-4 sm:mt-0">
              <div className="text-2xl font-bold text-white pb-3">
                Mr. Surendar Subramani
              </div>
              <div className="text-3xl font-bold text-brand-gold">
                Co-Founder
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-2000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Highshine
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Our founder, Mr. Hari Gautham, is creating a community of experts
            dedicated to viewing each implementation as a lifelong commitment
            to our clients' success.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Our co-founder, Mr. Surender, identified this gap repeatedly during
            his extensive global experience in ERP transformations. From Asia
            to the Americas, he recognized the need for a provider who remains
            committed to clients long after go-live, ensuring they unlock the
            full potential of ERP.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            This unwavering approach has driven Highshine to achieve an
            extraordinary 300% year-over-year growth since its inception.
            However, our success isn't just about numbers; it reflects our
            steadfast dedication to our clients and our team.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-[#f5a623] pl-5 py-2">
            <p className="text-[#f5a623] italic text-lg font-medium">
              "We believe ERP success is a lifelong partnership."
            </p>

            <cite className="text-gray-500 text-sm mt-1 block not-italic">
              — Hari Gautham & Surender, Co-Founders
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;