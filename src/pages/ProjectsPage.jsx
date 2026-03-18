import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolio'

const ProjectsPage = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Slide-in gallery animation
  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  }

  return (
    <section className="relative min-h-screen py-32 px-6">
      {/* Curtain opening effect */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
        className="fixed inset-0 bg-gradient-to-r from-primary-red via-primary-blue to-primary-green z-40 origin-left"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.87, 0, 0.13, 1] }}
        className="fixed inset-0 bg-dark-bg z-40 origin-right"
      />

      {showContent && (
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 mb-12"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #ef4444, #3b82f6, #10b981, #ef4444)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
            </motion.h1>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-red to-transparent"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-gray-400 text-lg mb-12 max-w-2xl"
          >
            A showcase of my recent work and side projects
          </motion.p>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                className={`glass rounded-2xl overflow-hidden group ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex relative`}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: [
                      'linear-gradient(0deg, rgba(239,68,68,0.3), rgba(59,130,246,0.3))',
                      'linear-gradient(90deg, rgba(59,130,246,0.3), rgba(16,185,129,0.3))',
                      'linear-gradient(180deg, rgba(16,185,129,0.3), rgba(239,68,68,0.3))',
                      'linear-gradient(270deg, rgba(239,68,68,0.3), rgba(59,130,246,0.3))',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ padding: '2px' }}
                />

                {/* Project Image */}
                <div className="md:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary-red/20 via-primary-blue/20 to-primary-green/20 min-h-[300px] flex items-center justify-center group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-red/20 via-primary-blue/20 to-primary-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Project Info */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center relative z-10 bg-dark-card/50">
                  {project.featured && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      className="text-primary-green text-sm font-mono mb-2 flex items-center gap-2"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ★
                      </motion.span>
                      Featured Project
                    </motion.span>
                  )}

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="text-gray-400 mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm bg-white/5 rounded-full text-primary-blue border border-white/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="flex gap-4"
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-green rounded-lg hover:shadow-lg hover:shadow-primary-blue/50 transition-all"
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all"
                      >
                        <FiGithub />
                        <span>Code</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating project count */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="fixed bottom-20 right-20 text-9xl font-bold text-white"
          >
            {projects.length}
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default ProjectsPage
