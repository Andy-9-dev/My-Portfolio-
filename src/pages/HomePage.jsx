import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiArrowRight, FiCode, FiStar, FiZap } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { personalInfo } from '../data/portfolio'
import { useState, useEffect } from 'react'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const HomePage = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  }

  const glitchVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }


  const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      role: "Computer Scientist"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      role: "Software Developer"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
      role: "Developer"
    },
  ]

  const highlights = [
    {
      icon: FiCode,
      title: "Clean Code",
      description: "Writing elegant, maintainable code that stands the test of time"
    },
    {
      icon: FiStar,
      title: "Pixel Perfect",
      description: "Transforming designs into flawless, responsive interfaces"
    },
    {
      icon: FiZap,
      title: "Performance",
      description: "Optimizing every millisecond for lightning-fast experiences"
    },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Epic opening overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
        className="fixed inset-0 bg-gradient-to-br from-primary-red via-primary-blue to-primary-green z-50 origin-top"
      />

      {showContent && (
        <>
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto text-center z-10"
            >
              <motion.p
                variants={itemVariants}
                className="text-primary-blue text-lg md:text-xl mb-4 font-mono"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
                  transition={{ duration: 0.5, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5] }}
                >
                  {'>'}_
                </motion.span>{' '}
                Welcome, I'm
              </motion.p>

              <motion.h1
                variants={glitchVariants}
                className="text-5xl md:text-7xl lg:text-9xl font-bold mb-4 relative"
              >
                <motion.span
                  className="gradient-text inline-block"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(239, 68, 68, 0.5)',
                      '0 0 40px rgba(59, 130, 246, 0.5)',
                      '0 0 20px rgba(16, 185, 129, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {personalInfo.name}
                </motion.span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-8"
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Crafting exceptional digital experiences with clean code and stunning design.
                <br />
                <span className="text-primary-blue">Turning ideas into reality, one line at a time.</span>
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16 items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/projects"
                    className="px-8 py-4 bg-gradient-to-r from-primary-red via-primary-blue to-primary-green rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-blue/50 transition-all flex items-center gap-2 text-lg whitespace-nowrap"
                  >
                    View My Work
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white/10 transition-all text-lg whitespace-nowrap"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 justify-center">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-3xl text-gray-400 hover:text-white transition-colors"
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="text-3xl text-gray-400 hover:text-white transition-colors"
                >
                  <FiMail />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>


          {/* What I Bring Section */}
          <div className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                  What I Bring To The Table
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                  More than just code - I bring passion, creativity, and a relentless drive for excellence
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="glass rounded-2xl p-8 text-center group cursor-pointer relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-primary-blue/10 to-primary-green/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-blue to-primary-green flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="text-3xl text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>


          {/* Quotes Section */}
          <div className="py-20 px-6 bg-gradient-to-b from-transparent via-primary-blue/5 to-transparent">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                  Words That Inspire Me
                </h2>
                <p className="text-gray-400 text-lg">
                  Wisdom from the minds that shaped technology
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {quotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="glass rounded-2xl p-8 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-red via-primary-blue to-primary-green"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    />
                    <div className="text-6xl text-primary-blue/20 mb-4">"</div>
                    <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                      {quote.text}
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold">{quote.author}</p>
                      <p className="text-primary-blue text-sm">{quote.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div id="about">
            <About />
          </div>

          {/* Tech Stack Section */}
          <div id="tech">
            <TechStack />
          </div>

          {/* Projects Section */}
          <div id="projects">
            <Projects />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <Contact />
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary-red/20 blur-3xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-primary-blue/20 blur-3xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-primary-green/20 blur-3xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </>
      )}
    </section>
  )
}

export default HomePage
