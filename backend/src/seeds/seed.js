/**
 * seed.js
 * Populates the visitors collection with 35 realistic dummy records
 * spread across the last 30 days.
 *
 * Run: npm run seed
 */

require("dotenv").config({ path: require("path").resolve(__dirname,"../../.env") });

const mongoose = require("mongoose");
const Visitor  = require("../models/Visitor");


const pages = [
  "/",
  "/about",
  "/solutions",
  "/solutions/erp-implementation",
  "/solutions/post-go-live",
  "/industries",
  "/contact",
  "/blog",
  "/our-works",
];

const referrers = [
  "google.com",
  "linkedin.com",
  "direct",
  "twitter.com",
  "bing.com",
  "facebook.com",
  "direct",          // "direct" appears twice to increase its probability
  "google.com",      // same for google
];

const countries = [
  "India",
  "India",
  "India",
  "India",
  "United States",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Singapore",
  "Australia",
  "Canada",
];

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Returns a random element from an array */
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Returns a random Date within the last `days` days.
 * Spreading events realistically across the window.
 */
const randomDateWithinDays = (days) => {
  const now    = Date.now();
  const oldest = now - days * 24 * 60 * 60 * 1000;
  return new Date(oldest + Math.random() * (now - oldest));
};

// ── Seed function ─────────────────────────────────────────────────────────────

const seed = async () => {
  try {

    const MONGO_URL = process.env.MONGO_URL;
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");

    // Remove existing seed data so the script is idempotent (safe to re-run)
    const deleted = await Visitor.deleteMany({});
    console.log(`🗑️  Cleared ${deleted.deletedCount} existing records`);

    // Build 35 visitor documents
    const records = Array.from({ length: 35 }, () => ({
      page:      pick(pages),
      referrer:  pick(referrers),
      country:   pick(countries),
      timestamp: randomDateWithinDays(30),
    }));

    // Insert all at once — faster than individual .create() calls
    const inserted = await Visitor.insertMany(records);
    console.log(`🌱 Seeded ${inserted.length} visitor records`);

    // Print a quick preview
    console.log("\nSample records:");
    inserted.slice(0, 5).forEach((v) =>
      console.log(`  page=${v.page}  country=${v.country}  referrer=${v.referrer}  ts=${v.timestamp.toISOString().split("T")[0]}`)
    );

    console.log("\n✅ Seeding complete. Run the API to see the data.");
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
};

seed();
