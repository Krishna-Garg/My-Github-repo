"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = ["home", "about", "skills", "projects", "contact"]

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div className="nav-logo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Krishna Garg
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              className="nav-link"
              onClick={() => scrollToSection(item)}
              whileHover={{ scale: 1.1, color: "#10b981" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <motion.button className="hamburger" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }}>
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item}
            className="mobile-nav-link"
            onClick={() => scrollToSection(item)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
