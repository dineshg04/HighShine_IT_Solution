import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Timeline from '../components/Timeline'
import ValuesSection from '../components/ValuesSection'
import IndustrygapSection from '../components/IndustrygapSection'
import ScheduleSection from '../components/ScheduleSection'
import CultureSection from '../components/CultureSection'
import AboutSection from '../components/AboutSection'
import Photos from '../components/Photos'
import FooterSection from '../components/FooterSection'

import { useEffect, useRef } from 'react'

import { api } from '../api/axiosapi'
import { getCountryName } from '../api/axiosapi'
import Dashboard from '../components/Dashboard'


import { trackPageView, trackSectionView } from "../services/analytics";


const TRACKED_SECTIONS = [
  { id: "hero",         label: "Hero"          },
  { id: "milestones",   label: "Milestones"    },
  { id: "team-photos",  label: "Team Photos"   },
  { id: "about",        label: "About"         },
  { id: "leadership",   label: "Leadership"    },
  { id: "industry-gap", label: "Industry Gap"  },
  { id: "values",       label: "Values"        },
  { id: "cta",          label: "CTA"           },
];



const Landingpage = () => {
 const firedSections = useRef(new Set());    
  useEffect(() => {
  const logVisitor = async () => {
    try {
      await api.post("/api/visitor", {
        page: window.location.pathname,
        referrer: document.referrer || "direct",
        country: getCountryName(),
      });

      console.log("Visitor logged");
      
    } catch (error) {
      console.log("Error logging visitor:", error);
    }
  };
  
   logVisitor();
    trackPageView({
      page_path:  "/about",
      page_title: "About Us — Highshine IT Solutions",
    });


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.dataset.section;
            // Only fire once per section per page load
            if (sectionId && !firedSections.current.has(sectionId)) {
              firedSections.current.add(sectionId);
              const section = TRACKED_SECTIONS.find((s) => s.id === sectionId);
              if (section) trackSectionView(section.label);
            }
          }
        });
      },
      { threshold: 0.3 }   // fires when 30% of the section is visible
    );

    // Observe every element that has a data-section attribute
    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();



 
}, []);

  return (
    <>
    <div className='font-sans antialiased bg-brand-dark '>
        <Navbar/>
        <div id='home' data-section="hero" > <Home/></div>
        <div id='aboutus' data-section="about">  <AboutSection/></div>
        <div id='photos' data-section="team-photos">  <Photos/></div>
        <div data-section="milestones"> <Timeline/></div>
        <div  data-section="leadership"> <CultureSection/></div>
        <div id='value' data-section="values"> <ValuesSection/></div>
        <div id='industrygap' data-section="industry-gap" ><IndustrygapSection/></div>
        <div data-section="cta"><ScheduleSection/></div>
        <div> <FooterSection/></div>
    </div>
    
     
    </>
    
  )
}

export default Landingpage