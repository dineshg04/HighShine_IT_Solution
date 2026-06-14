/**
 * src/services/analytics.js
 *
 * All Google Analytics 4 (GA4) event tracking lives here.
 * No component ever calls window.gtag() directly — they import from this file.
 *
 * WHY THIS PATTERN:
 *   - One place to update if the Measurement ID or event names change
 *   - Safe no-op if GA4 is blocked by an ad blocker (never crashes the app)
 *   - Named functions are readable and self-documenting in component code
 *
 * MEASUREMENT ID:
 *   Set VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX in your frontend .env file.
 *   Get it from: GA4 → Admin → Data Streams → your web stream → Measurement ID
 *
 * EVENTS CONFIGURED:
 *   ┌─────────────────┬────────────────────────────────────────────────────┐
 *   │ Event name      │ When it fires                                      │
 *   ├─────────────────┼────────────────────────────────────────────────────┤
 *   │ page_view       │ Page first loads (AboutPage useEffect)             │
 *   │ cta_click       │ "Schedule consultation" button clicked ← CONVERSION│
 *   │ section_view    │ User scrolls into a major section (IntersectionObs)│
 *   │ nav_click       │ Nav link or Contact Us button clicked              │
 *   └─────────────────┴────────────────────────────────────────────────────┘
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Internal safe wrapper around window.gtag.
 * Returns silently if gtag hasn't loaded (ad blocker, slow network, etc.)
 */
const gtag = (...args) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    // During development without a real GA4 ID, log to console so you can
    // verify events are being called correctly before going live
    if (import.meta.env.DEV) {
      console.log("[GA4 DEV]", ...args);
    }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// page_view
// Fires when the About page mounts.
// send_page_view: false in index.html means GA4 waits for THIS manual call,
// which lets us attach extra context (country, referrer).
// ─────────────────────────────────────────────────────────────────────────────
export const trackPageView = ({ page_path, page_title } = {}) => {
  gtag("event", "page_view", {
    page_path:     page_path  || window.location.pathname,
    page_title:    page_title || document.title,
    page_location: window.location.href,
    send_to:       MEASUREMENT_ID,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// cta_click  ← CONFIGURED AS A CONVERSION GOAL IN GA4
// Fires when the primary CTA button ("Schedule a free consultation") is clicked.
//
// TO SET UP THE CONVERSION IN GA4:
//   Admin → Conversions → New conversion event → type "cta_click" → Save
//   GA4 will then mark every cta_click event as a conversion automatically.
// ─────────────────────────────────────────────────────────────────────────────
export const trackCtaClick = ({ label = "schedule_consultation", location = "cta_section" } = {}) => {
  gtag("event", "cta_click", {
    event_category: "engagement",
    event_label:    label,
    cta_location:   location,   // e.g. "cta_section", "navbar", "hero"
    send_to:        MEASUREMENT_ID,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// section_view
// Fires when the user scrolls into a major section.
// Used by the IntersectionObserver in AboutPage.
// Helps answer: "Which parts of the page do people actually read?"
// ─────────────────────────────────────────────────────────────────────────────
export const trackSectionView = (sectionName) => {
  gtag("event", "section_view", {
    event_category: "scroll_engagement",
    section_name:   sectionName,
    send_to:        MEASUREMENT_ID,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// nav_click
// Fires when any nav link or the navbar "Contact Us" button is clicked.
// Helps answer: "Which nav items drive the most intent?"
// ─────────────────────────────────────────────────────────────────────────────
export const trackNavClick = (linkLabel) => {
  gtag("event", "nav_click", {
    event_category: "navigation",
    link_label:     linkLabel,
    send_to:        MEASUREMENT_ID,
  });
};
