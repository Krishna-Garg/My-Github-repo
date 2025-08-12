"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src="/professional-developer-portrait.png"
              alt="Krishna Garg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              I'm a passionate full-stack developer with a love for creating innovative web solutions. With expertise in
              modern JavaScript frameworks and a keen eye for design, I bring ideas to life through clean, efficient
              code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>

            <motion.div
              className="fun-facts"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3>Fun Facts</h3>
              <ul>
                <li>🚀 Built 20+ web applications</li>
                <li>☕ Coffee enthusiast & night owl</li>
                <li>🎮 Gaming in spare time</li>
                <li>📚 Always learning something new</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
