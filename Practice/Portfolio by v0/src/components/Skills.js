"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [animatedValues, setAnimatedValues] = useState({})

  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
  ]

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues((prev) => ({
            ...prev,
            [skill.name]: skill.level,
          }))
        }, index * 200)
      })
    }
  }, [isInView])

  const getSkillLevel = (level) => {
    if (level >= 85) return "Advanced"
    if (level >= 70) return "Intermediate"
    return "Beginner"
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Proficiency
        </motion.h2>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>

              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedValues[skill.name] || 0}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>

              <div className="skill-info">
                <span className="skill-percentage">{skill.level}%</span>
                <span className="skill-level">{getSkillLevel(skill.level)}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
