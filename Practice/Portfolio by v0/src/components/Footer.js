"use client"
import { motion } from "framer-motion"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-left">
            <h3>Krishna Garg</h3>
            <p>Building the future, one line of code at a time.</p>
          </div>

          <div className="footer-center">
            <motion.button
              onClick={scrollToTop}
              className="back-to-top"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑ Back to Top
            </motion.button>
          </div>

          <div className="footer-right">
            <p>&copy; 2024 Krishna Garg. All rights reserved.</p>
            <p>Made with ❤️ and React</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
