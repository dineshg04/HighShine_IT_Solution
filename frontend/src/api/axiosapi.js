import axios from "axios";

export const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL
}) ;



const TIMEZONE_TO_COUNTRY = {
  "Asia/Calcutta":            "India",
  "Asia/Kolkata":             "India",
  "America/New_York":         "United States",
  "America/Chicago":          "United States",
  "America/Denver":           "United States",
  "America/Los_Angeles":      "United States",
  "America/Phoenix":          "United States",
  "Europe/London":            "United Kingdom",
  "Asia/Dubai":               "United Arab Emirates",
  "Asia/Singapore":           "Singapore",
  "Australia/Sydney":         "Australia",
  "Australia/Melbourne":      "Australia",
  "America/Toronto":          "Canada",
  "America/Vancouver":        "Canada",
  "Europe/Berlin":            "Germany",
  "Europe/Paris":             "France",
  "Asia/Tokyo":               "Japan",
  "Asia/Shanghai":            "China",
  "Asia/Hong_Kong":           "Hong Kong",
  "Asia/Karachi":             "Pakistan",
  "Asia/Dhaka":               "Bangladesh",
  "Asia/Colombo":             "Sri Lanka",
  "Asia/Kathmandu":           "Nepal",
  "Africa/Nairobi":           "Kenya",
  "America/Sao_Paulo":        "Brazil",
  "Europe/Amsterdam":         "Netherlands",
  "Europe/Madrid":            "Spain",
  "Europe/Rome":              "Italy",
  "Asia/Seoul":               "South Korea",
  "Asia/Riyadh":              "Saudi Arabia",
  "Africa/Cairo":             "Egypt",
};

export const getCountryName = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return TIMEZONE_TO_COUNTRY[tz] || "Unknown";
  } catch {
    return "Unknown";
  }
};

export const logVisitor = async (payload) => {
  try {
    await api.post("/api/visitor", payload);
  } catch (err) {
    console.warn("logVisitor failed:", err.message);
  }
};

