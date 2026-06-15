

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;


const gtag = (...args) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  } else {

    if (import.meta.env.DEV) {
      console.log("[GA4 DEV]", ...args);
    }
  }
};


export const trackPageView = ({ page_path, page_title } = {}) => {
  gtag("event", "page_view", {
    page_path:     page_path  || window.location.pathname,
    page_title:    page_title || document.title,
    page_location: window.location.href,
    send_to:       MEASUREMENT_ID,
  });
};




export const trackCtaClick = ({ label = "schedule_consultation", location = "cta_section" } = {}) => {
  gtag("event", "cta_click", {
    event_category: "engagement",
    event_label:    label,
    cta_location:   location,   
    send_to:        MEASUREMENT_ID,
  });
};


export const trackSectionView = (sectionName) => {
  gtag("event", "section_view", {
    event_category: "scroll_engagement",
    section_name:   sectionName,
    send_to:        MEASUREMENT_ID,
  });
};


export const trackNavClick = (linkLabel) => {
  gtag("event", "nav_click", {
    event_category: "navigation",
    link_label:     linkLabel,
    send_to:        MEASUREMENT_ID,
  });
};
