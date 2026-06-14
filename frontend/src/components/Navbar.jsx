import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.jpg";
import { trackNavClick, trackCtaClick } from "../services/analytics";
import { logVisitor, getCountryName } from "../api/axiosapi";

const Navbar = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#value" },
    { label: "Industries", href: "#industrygap" },
    { label: "About Us", href: "#aboutus" },
    { label: "Blogs", href: "#photos" },
    { label: "Our Works", href: "#industrygap" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (label) => {
    trackNavClick(label);
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    trackCtaClick({
      label: "contact_us",
      location: "navbar",
    });

    logVisitor({
      page: "/cta-click",
      referrer: document.referrer || "direct",
      country: getCountryName(),
    });

    setMenuOpen(false);
  };

  return (
    <nav
      className={`relative sticky top-1.5 left-0 right-0 z-50 mx-4 rounded-full pl-4 transition-all duration-300 ${
        menuOpen
          ? "bg-[#0d0b1e] shadow-lg"
          : scrolled
          ? "bg-[#0d0b1e]/70 backdrop-blur-sm shadow-lg"
          : "bg-transparent backdrop-blur-xl border-t-4 border-t-brand-gold/20 shadow-lg shadow-brand-gold/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-11 h-7 rounded-sm flex items-center justify-center">
            <img
              src={Logo}
              alt="Highshine Logo"
              className="rounded-sm"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold text-lg">
              Highshine
            </span>
            <span className="text-white font-extrabold text-lg">
              IT Solution
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavLinkClick(link.label)}
              className="text-lg font-normal hover:text-brand-gold hover:font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={handleContactClick}
          className="hidden md:block bg-brand-gold text-[#0d0b1e] font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:bg-[#f9a006] hover:scale-110 hover:shadow-[0_0_20px_rgba(245,166,35,0.4)]"
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {menuOpen ? (
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12Z" />
            ) : (
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            right-0
            mt-3
            md:hidden
            rounded-3xl
            bg-[#0d0b1e]/95
            backdrop-blur-xl
            border border-purple-900/40
            shadow-xl
            px-6
            py-5
            flex
            flex-col
            gap-4
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-brand-gold transition-colors"
              onClick={() => {
                handleNavLinkClick(link.label);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={handleContactClick}
            className="mt-2 bg-brand-gold text-[#0d0b1e] font-semibold text-sm px-5 py-2 rounded-full w-full"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;